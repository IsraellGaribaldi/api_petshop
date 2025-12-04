import prisma from '../lib/prisma.js';
import { PetCreate, PetUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const petService = {
  async findAll(query: PaginationQuery & { especie?: string; clienteId?: number }) {
    const { page, limit, search, orderBy = 'nome', order, especie, clienteId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { raca: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (especie) {
      where.especie = especie;
    }
    
    if (clienteId) {
      where.clienteId = clienteId;
    }

    const [data, total] = await Promise.all([
      prisma.pet.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        include: {
          cliente: { select: { id: true, nome: true, telefone: true } },
        },
      }),
      prisma.pet.count({ where }),
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
    const pet = await prisma.pet.findUnique({
      where: { id },
      include: {
        cliente: true,
        atendimentos: {
          include: { servico: true, funcionario: { select: { nome: true } } },
          orderBy: { dataHora: 'desc' },
          take: 10,
        },
      },
    });

    if (!pet) {
      throw new AppError('Pet não encontrado', 404);
    }

    return pet;
  },

  async create(data: PetCreate) {
    // Verificar se cliente existe
    const cliente = await prisma.cliente.findUnique({
      where: { id: data.clienteId },
    });

    if (!cliente) {
      throw new AppError('Cliente não encontrado', 404);
    }

    return prisma.pet.create({
      data,
      include: { cliente: { select: { id: true, nome: true } } },
    });
  },

  async update(id: number, data: PetUpdate) {
    await this.findById(id);
    
    return prisma.pet.update({
      where: { id },
      data,
      include: { cliente: { select: { id: true, nome: true } } },
    });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.pet.delete({ where: { id } });
  },

  async findByCliente(clienteId: number) {
    return prisma.pet.findMany({
      where: { clienteId },
      include: {
        _count: { select: { atendimentos: true } },
      },
    });
  },
};
