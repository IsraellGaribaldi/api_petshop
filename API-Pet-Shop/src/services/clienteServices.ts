// src/services/clienteServices.ts

// Importa a instância do PrismaClient.
import { prisma } from '../db/prisma/prisma.ts';

// REMOVIDO: A importação direta do tipo estava causando o erro de tipagem:
// import { type Cliente } from '@prisma/client'; 

// 🎯 SOLUÇÃO: Inferir o tipo do modelo Cliente a partir da instância do Prisma.
type ClienteModel = typeof prisma.cliente;
// Tipo Cliente é o resultado esperado de uma consulta (ex: findFirst)
type ClienteType = Awaited<ReturnType<ClienteModel['findFirst']>>; 


// Define o tipo para a criação de um novo cliente.
// Usamos a sintaxe do Prisma para pegar o tipo exato de dados de criação.
type ClienteCreateData = Parameters<ClienteModel['create']>[0]['data'];

// Define o tipo para a atualização de um cliente.
type ClienteUpdateData = Parameters<ClienteModel['update']>[0]['data'];


// Função para criar um novo cliente no banco de dados.
export const create = async (data: ClienteCreateData): Promise<ClienteType> => {
 return prisma.cliente.create({
 data,
 });
};

// Função para buscar todos os clientes no banco de dados.
export const getAll = async (): Promise<ClienteType[]> => {
 return prisma.cliente.findMany();
};

// Função para buscar um cliente pelo ID no banco de dados.
export const getById = async (id: number): Promise<ClienteType | null> => {
 return prisma.cliente.findUnique({ where: { id } });
};

// Função para atualizar um cliente no banco de dados.
export const update = async (id: number, data: ClienteUpdateData): Promise<ClienteType> => {
 return prisma.cliente.update({
 where: { id },
  data,
 });
};

// Função para remover um cliente do banco de dados.
export const remove = async (id: number): Promise<ClienteType> => {
 return prisma.cliente.delete({ where: { id } });
};