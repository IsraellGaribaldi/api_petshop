import prisma from '../lib/prisma.js';
import { ProdutoCreate, ProdutoUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const produtoService = {
  async findAll(query: PaginationQuery & { categoria?: string; ativo?: boolean }) {
    const { page, limit, search, orderBy = 'nome', order, categoria, ativo } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { descricao: { contains: search, mode: 'insensitive' } },
        { codigoBarra: { contains: search } },
      ];
    }
    
    if (categoria) {
      where.categoria = categoria;
    }
    
    if (ativo !== undefined) {
      where.ativo = ativo;
    }

    const [data, total] = await Promise.all([
      prisma.produto.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
      }),
      prisma.produto.count({ where }),
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
    const produto = await prisma.produto.findUnique({
      where: { id },
    });

    if (!produto) {
      throw new AppError('Produto não encontrado', 404);
    }

    return produto;
  },

  async create(data: ProdutoCreate) {
    return prisma.produto.create({ data });
  },

  async update(id: number, data: ProdutoUpdate) {
    await this.findById(id);
    return prisma.produto.update({ where: { id }, data });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.produto.delete({ where: { id } });
  },

  async updateEstoque(id: number, quantidade: number) {
    const produto = await this.findById(id);
    const novoEstoque = produto.estoque + quantidade;
    
    if (novoEstoque < 0) {
      throw new AppError('Estoque insuficiente', 400);
    }
    
    return prisma.produto.update({
      where: { id },
      data: { estoque: novoEstoque },
    });
  },

  async getCategorias() {
    const categorias = await prisma.produto.groupBy({
      by: ['categoria'],
      _count: { categoria: true },
    });
    
    return categorias.map(c => ({
      nome: c.categoria,
      quantidade: c._count.categoria,
    }));
  },

  async getBaixoEstoque(minimo: number = 10) {
    return prisma.produto.findMany({
      where: {
        estoque: { lte: minimo },
        ativo: true,
      },
      orderBy: { estoque: 'asc' },
    });
  },
};
