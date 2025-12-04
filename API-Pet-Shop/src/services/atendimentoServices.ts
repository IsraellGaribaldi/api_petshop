import prisma from '../lib/prisma.js';
import { AtendimentoCreate, AtendimentoUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const atendimentoService = {
  async findAll(query: PaginationQuery & { status?: string; funcionarioId?: number; dataInicio?: string; dataFim?: string }) {
    const { page, limit, search, orderBy = 'dataHora', order = 'desc', status, funcionarioId, dataInicio, dataFim } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        { pet: { nome: { contains: search, mode: 'insensitive' } } },
        { servico: { nome: { contains: search, mode: 'insensitive' } } },
        { observacoes: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (status) {
      where.status = status;
    }
    
    if (funcionarioId) {
      where.funcionarioId = funcionarioId;
    }

    if (dataInicio || dataFim) {
      where.dataHora = {};
      if (dataInicio) where.dataHora.gte = new Date(dataInicio);
      if (dataFim) where.dataHora.lte = new Date(dataFim);
    }

    const [data, total] = await Promise.all([
      prisma.atendimento.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        include: {
          pet: { include: { cliente: { select: { id: true, nome: true, telefone: true } } } },
          funcionario: { select: { id: true, nome: true, cargo: true } },
          servico: { select: { id: true, nome: true, preco: true, duracao: true } },
        },
      }),
      prisma.atendimento.count({ where }),
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
    const atendimento = await prisma.atendimento.findUnique({
      where: { id },
      include: {
        pet: { include: { cliente: true } },
        funcionario: { select: { id: true, nome: true, cargo: true, email: true } },
        servico: true,
      },
    });

    if (!atendimento) {
      throw new AppError('Atendimento não encontrado', 404);
    }

    return atendimento;
  },

  async create(data: AtendimentoCreate) {
    // Verificar se pet existe
    const pet = await prisma.pet.findUnique({ where: { id: data.petId } });
    if (!pet) throw new AppError('Pet não encontrado', 404);

    // Verificar se funcionário existe
    const funcionario = await prisma.funcionario.findUnique({ where: { id: data.funcionarioId } });
    if (!funcionario) throw new AppError('Funcionário não encontrado', 404);

    // Verificar se serviço existe
    const servico = await prisma.servico.findUnique({ where: { id: data.servicoId } });
    if (!servico) throw new AppError('Serviço não encontrado', 404);

    return prisma.atendimento.create({
      data: {
        ...data,
        dataHora: new Date(data.dataHora),
      },
      include: {
        pet: { include: { cliente: { select: { nome: true } } } },
        funcionario: { select: { nome: true } },
        servico: { select: { nome: true, preco: true } },
      },
    });
  },

  async update(id: number, data: AtendimentoUpdate) {
    await this.findById(id);
    
    const updateData: any = { ...data };
    if (data.dataHora) {
      updateData.dataHora = new Date(data.dataHora);
    }
    
    return prisma.atendimento.update({
      where: { id },
      data: updateData,
      include: {
        pet: true,
        funcionario: { select: { nome: true } },
        servico: true,
      },
    });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.atendimento.delete({ where: { id } });
  },

  async getAgendamentosHoje() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    return prisma.atendimento.findMany({
      where: {
        dataHora: {
          gte: hoje,
          lt: amanha,
        },
      },
      include: {
        pet: { include: { cliente: { select: { nome: true, telefone: true } } } },
        funcionario: { select: { nome: true } },
        servico: { select: { nome: true } },
      },
      orderBy: { dataHora: 'asc' },
    });
  },

  async getProximosAgendamentos(dias: number = 7) {
    const hoje = new Date();
    const futuro = new Date();
    futuro.setDate(futuro.getDate() + dias);

    return prisma.atendimento.findMany({
      where: {
        dataHora: {
          gte: hoje,
          lte: futuro,
        },
        status: 'agendado',
      },
      include: {
        pet: { include: { cliente: { select: { nome: true, telefone: true } } } },
        funcionario: { select: { nome: true } },
        servico: { select: { nome: true, duracao: true } },
      },
      orderBy: { dataHora: 'asc' },
    });
  },
};
