import prisma from '../lib/prisma.js';
import { ClienteCreate, ClienteUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const clienteService = {
  async findAll(query: PaginationQuery) {
    const { page, limit, search, orderBy = 'nome', order } = query;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { nome: { contains: search, mode: 'insensitive' as const } },
            { email: { contains: search, mode: 'insensitive' as const } },
            { telefone: { contains: search } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      prisma.cliente.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        include: {
          _count: { select: { pets: true, vendas: true } },
        },
      }),
      prisma.cliente.count({ where }),
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
    const cliente = await prisma.cliente.findUnique({
      where: { id },
      include: {
        pets: true,
        vendas: {
          include: { itens: { include: { produto: true } } },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!cliente) {
      throw new AppError('Cliente não encontrado', 404);
    }

    return cliente;
  },

  async create(data: ClienteCreate) {
    return prisma.cliente.create({
      data,
      include: { pets: true },
    });
  },

  async update(id: number, data: ClienteUpdate) {
    await this.findById(id);
    
    return prisma.cliente.update({
      where: { id },
      data,
      include: { pets: true },
    });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.cliente.delete({ where: { id } });
  },
};
