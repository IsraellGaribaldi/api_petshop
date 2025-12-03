// src/services/funcionarioServices.ts

// Importa a instância do PrismaClient.
import { prisma } from '../db/prisma/prisma.ts';

// REMOVIDO: importação de tipos de '../generated/prisma/index.ts'

// 🎯 SOLUÇÃO: Inferir o tipo do modelo Funcionario a partir da instância do Prisma.
type FuncionarioModel = typeof prisma.funcionario;
// Tipo Funcionario é o resultado esperado de uma consulta (ex: findFirst)
// Usamos Awaited<ReturnType<...>> para obter o tipo do objeto Funcionario
type FuncionarioType = Awaited<ReturnType<FuncionarioModel['findFirst']>>;


// Define o tipo para a criação de um novo funcionário.
type FuncionarioCreateData = Parameters<FuncionarioModel['create']>[0]['data'];

// Define o tipo para a atualização de um funcionário.
type FuncionarioUpdateData = Parameters<FuncionarioModel['update']>[0]['data'];


// Função para criar um novo funcionário no banco de dados.
export const create = async (data: FuncionarioCreateData): Promise<FuncionarioType> => {
 return prisma.funcionario.create({
  data,
  });
};

// Função para buscar todos os funcionários no banco de dados.
export const getAll = async (): Promise<FuncionarioType[]> => {
  return prisma.funcionario.findMany();
};

// Função para buscar um funcionário pelo ID no banco de dados.
export const getById = async (id: number): Promise<FuncionarioType | null> => {
  return prisma.funcionario.findUnique({ where: { id } });
};

// Função para atualizar um funcionário no banco de dados.
export const update = async (id: number, data: FuncionarioUpdateData): Promise<FuncionarioType> => {
  return prisma.funcionario.update({
   where: { id },
  data,
  });
};

// Função para remover um funcionário do banco de dados.
export const remove = async (id: number): Promise<FuncionarioType> => {
 return prisma.funcionario.delete({ where: { id } });
};