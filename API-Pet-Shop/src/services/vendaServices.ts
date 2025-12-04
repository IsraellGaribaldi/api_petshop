import prisma from '../lib/prisma.js';
import { VendaCreate, VendaUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const vendaService = {
  async findAll(query: PaginationQuery & { status?: string; clienteId?: number; dataInicio?: string; dataFim?: string }) {
    const { page, limit, search, orderBy = 'createdAt', order = 'desc', status, clienteId, dataInicio, dataFim } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.cliente = { nome: { contains: search, mode: 'insensitive' } };
    }
    
    if (status) {
      where.status = status;
    }
    
    if (clienteId) {
      where.clienteId = clienteId;
    }

    if (dataInicio || dataFim) {
      where.createdAt = {};
      if (dataInicio) where.createdAt.gte = new Date(dataInicio);
      if (dataFim) where.createdAt.lte = new Date(dataFim);
    }

    const [data, total] = await Promise.all([
      prisma.venda.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        include: {
          cliente: { select: { id: true, nome: true } },
          itens: {
            include: { produto: { select: { id: true, nome: true } } },
          },
        },
      }),
      prisma.venda.count({ where }),
    ]);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  async findById(id: number) {
    const venda = await prisma.venda.findUnique({
      where: { id },
      include: {
        cliente: true,
        itens: {
          include: { produto: true },
        },
      },
    });

    if (!venda) {
      throw new AppError('Venda não encontrada', 404);
    }

    return venda;
  },

  async create(data: VendaCreate) {
    // Verificar se cliente existe
    const cliente = await prisma.cliente.findUnique({ where: { id: data.clienteId } });
    if (!cliente) throw new AppError('Cliente não encontrado', 404);

    // Buscar produtos e calcular totais
    const produtoIds = data.itens.map(item => item.produtoId);
    const produtos = await prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    if (produtos.length !== produtoIds.length) {
      throw new AppError('Um ou mais produtos não encontrados', 404);
    }

    // Verificar estoque e montar itens
    const itensParaCriar = data.itens.map(item => {
      const produto = produtos.find(p => p.id === item.produtoId)!;
      
      if (produto.estoque < item.quantidade) {
        throw new AppError(`Estoque insuficiente para ${produto.nome}`, 400);
      }
      
      return {
        produtoId: item.produtoId,
        quantidade: item.quantidade,
        precoUnit: produto.preco,
        subtotal: produto.preco * item.quantidade,
      };
    });

    const total = itensParaCriar.reduce((acc, item) => acc + item.subtotal, 0);

    // Criar venda com itens em uma transação
    const venda = await prisma.$transaction(async (tx) => {
      // Criar venda
      const novaVenda = await tx.venda.create({
        data: {
          clienteId: data.clienteId,
          formaPagto: data.formaPagto,
          total,
          status: 'pendente',
          itens: {
            create: itensParaCriar,
          },
        },
        include: {
          cliente: { select: { nome: true } },
          itens: { include: { produto: { select: { nome: true } } } },
        },
      });

      // Atualizar estoque dos produtos
      for (const item of data.itens) {
        await tx.produto.update({
          where: { id: item.produtoId },
          data: { estoque: { decrement: item.quantidade } },
        });
      }

      return novaVenda;
    });

    return venda;
  },

  async update(id: number, data: VendaUpdate) {
    const vendaExistente = await this.findById(id);

    // Se cancelando, devolver produtos ao estoque
    if (data.status === 'cancelado' && vendaExistente.status !== 'cancelado') {
      return prisma.$transaction(async (tx) => {
        for (const item of vendaExistente.itens) {
          await tx.produto.update({
            where: { id: item.produtoId },
            data: { estoque: { increment: item.quantidade } },
          });
        }

        return tx.venda.update({
          where: { id },
          data,
          include: {
            cliente: { select: { nome: true } },
            itens: { include: { produto: { select: { nome: true } } } },
          },
        });
      });
    }

    return prisma.venda.update({
      where: { id },
      data,
      include: {
        cliente: { select: { nome: true } },
        itens: { include: { produto: { select: { nome: true } } } },
      },
    });
  },

  async delete(id: number) {
    const venda = await this.findById(id);
    
    if (venda.status !== 'cancelado') {
      throw new AppError('Apenas vendas canceladas podem ser excluídas', 400);
    }
    
    return prisma.venda.delete({ where: { id } });
  },

  async getEstatisticas(dataInicio?: string, dataFim?: string) {
    const where: any = { status: 'pago' };
    
    if (dataInicio || dataFim) {
      where.createdAt = {};
      if (dataInicio) where.createdAt.gte = new Date(dataInicio);
      if (dataFim) where.createdAt.lte = new Date(dataFim);
    }

    const [vendas, totalVendas, porFormaPagto] = await Promise.all([
      prisma.venda.aggregate({
        where,
        _sum: { total: true },
        _count: true,
        _avg: { total: true },
      }),
      prisma.venda.count({ where }),
      prisma.venda.groupBy({
        by: ['formaPagto'],
        where,
        _sum: { total: true },
        _count: true,
      }),
    ]);

    return {
      totalVendas,
      valorTotal: vendas._sum.total || 0,
      ticketMedio: vendas._avg.total || 0,
      porFormaPagamento: porFormaPagto.map(p => ({
        forma: p.formaPagto,
        quantidade: p._count,
        valor: p._sum.total || 0,
      })),
    };
  },
};
