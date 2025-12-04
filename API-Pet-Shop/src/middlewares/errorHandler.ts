import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', error);

  // Erro de validação Zod
  if (error instanceof ZodError) {
    const errors = error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    
    return res.status(400).json({
      success: false,
      error: 'Erro de validação',
      details: errors,
    });
  }

  // Erro customizado da aplicação
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      error: error.message,
    });
  }

  // Erro do Prisma - registro não encontrado
  if (error.name === 'NotFoundError' || (error as any).code === 'P2025') {
    return res.status(404).json({
      success: false,
      error: 'Registro não encontrado',
    });
  }

  // Erro do Prisma - violação de constraint única
  if ((error as any).code === 'P2002') {
    const field = (error as any).meta?.target?.[0] || 'campo';
    return res.status(409).json({
      success: false,
      error: `Já existe um registro com este ${field}`,
    });
  }

  // Erro do Prisma - violação de foreign key
  if ((error as any).code === 'P2003') {
    return res.status(400).json({
      success: false,
      error: 'Registro relacionado não encontrado',
    });
  }

  // Erro genérico
  return res.status(500).json({
    success: false,
    error: 'Erro interno do servidor',
  });
}
