import prisma from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import { FuncionarioCreate, FuncionarioUpdate, PaginationQuery } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const funcionarioService = {
  async findAll(query: PaginationQuery & { cargo?: string; ativo?: boolean }) {
    const { page, limit, search, orderBy = 'nome', order, cargo, ativo } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (cargo) {
      where.cargo = cargo;
    }
    
    if (ativo !== undefined) {
      where.ativo = ativo;
    }

    const [data, total] = await Promise.all([
      prisma.funcionario.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderBy]: order },
        select: {
          id: true,
          nome: true,
          telefone: true,
          email: true,
          endereco: true,
          cargo: true,
          salario: true,
          ativo: true,
          createdAt: true,
          updatedAt: true,
          _count: { select: { atendimentos: true } },
        },
      }),
      prisma.funcionario.count({ where }),
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
    const funcionario = await prisma.funcionario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        telefone: true,
        email: true,
        endereco: true,
        cargo: true,
        salario: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
        _count: { select: { atendimentos: true } },
      },
    });

    if (!funcionario) {
      throw new AppError('Funcionário não encontrado', 404);
    }

    return funcionario;
  },

  async create(data: FuncionarioCreate) {
    const senhaHash = await bcrypt.hash(data.senha, 10);
    
    return prisma.funcionario.create({
      data: {
        ...data,
        senha: senhaHash,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        cargo: true,
        ativo: true,
        createdAt: true,
      },
    });
  },

  async update(id: number, data: FuncionarioUpdate) {
    await this.findById(id);
    
    return prisma.funcionario.update({
      where: { id },
      data,
      select: {
        id: true,
        nome: true,
        telefone: true,
        email: true,
        endereco: true,
        cargo: true,
        salario: true,
        ativo: true,
        updatedAt: true,
      },
    });
  },

  async delete(id: number) {
    await this.findById(id);
    return prisma.funcionario.delete({ where: { id } });
  },

  async updateSenha(id: number, senhaAtual: string, novaSenha: string) {
    const funcionario = await prisma.funcionario.findUnique({
      where: { id },
    });

    if (!funcionario) {
      throw new AppError('Funcionário não encontrado', 404);
    }

    const senhaValida = await bcrypt.compare(senhaAtual, funcionario.senha);
    if (!senhaValida) {
      throw new AppError('Senha atual incorreta', 400);
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
    
    return prisma.funcionario.update({
      where: { id },
      data: { senha: novaSenhaHash },
      select: { id: true, nome: true, email: true },
    });
  },

  async getCargos() {
    const cargos = await prisma.funcionario.groupBy({
      by: ['cargo'],
      _count: { cargo: true },
    });
    
    return cargos.map(c => ({
      nome: c.cargo,
      quantidade: c._count.cargo,
    }));
  },
};
