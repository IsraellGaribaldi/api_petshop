import prisma from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LoginInput } from '../schemas/index.js';
import { AppError } from '../middlewares/errorHandler.js';

export const authService = {
  async login(data: LoginInput) {
    const funcionario = await prisma.funcionario.findUnique({
      where: { email: data.email },
    });

    if (!funcionario) {
      throw new AppError('Email ou senha incorretos', 401);
    }

    if (!funcionario.ativo) {
      throw new AppError('Funcionário inativo', 401);
    }

    const senhaValida = await bcrypt.compare(data.senha, funcionario.senha);
    if (!senhaValida) {
      throw new AppError('Email ou senha incorretos', 401);
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError('JWT_SECRET não configurado', 500);
    }

    const token = jwt.sign(
      {
        id: funcionario.id,
        email: funcionario.email,
        cargo: funcionario.cargo,
      },
      secret,
      { expiresIn: '8h' }
    );

    return {
      token,
      funcionario: {
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
        cargo: funcionario.cargo,
      },
    };
  },

  async me(userId: number) {
    const funcionario = await prisma.funcionario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nome: true,
        email: true,
        cargo: true,
        telefone: true,
        ativo: true,
      },
    });

    if (!funcionario) {
      throw new AppError('Funcionário não encontrado', 404);
    }

    return funcionario;
  },
};
