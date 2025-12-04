import prisma from '../lib/prisma.js';
import { ServicoCreate, ServicoUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const servicoService = {
  async findAll(query: PaginationQuery & { ativo?: boolean }) {
    const { page, limit, search, orderBy = 'nome', order, ativo } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { descricao: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (ativo !== undefined) {
      where.ativo = ativo;
    }

    const [data, total] = await Promise.all([
      prisma.servico.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        include: {
          _count: { select: { atendimentos: true } },
        },
      }),
      prisma.servico.count({ where }),
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
    const servico = await prisma.servico.findUnique({
      where: { id },
      include: {
        _count: { select: { atendimentos: true } },
      },
    });

    if (!servico) {
      throw new AppError('Serviço não encontrado', 404);
    }

    return servico;
  },

  async create(data: ServicoCreate) {
    return prisma.servico.create({ data });
  },

  async update(id: number, data: ServicoUpdate) {
    await this.findById(id);
    return prisma.servico.update({ where: { id }, data });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.servico.delete({ where: { id } });
  },

  async getAtivos() {
    return prisma.servico.findMany({
      where: { ativo: true },
      orderBy: { nome: 'asc' },
    });
  },
};
