// src/services/atendimentoServices.ts

// Importa a instância do PrismaClient.
import { prisma } from '../db/prisma/prisma.ts';
// Remova a importação do tipo Atendimento (pois ela estava falhando).
// import { type Atendimento } from '@prisma/client'; 

type AtendimentoModel = typeof prisma.atendimento;
type AtendimentoType = Awaited<ReturnType<AtendimentoModel['findFirst']>>; // Inferir o tipo do modelo Atendimento


// Define o tipo para a criação de um novo atendimento.
// Usamos a sintaxe do Prisma para pegar o tipo exato de dados de criação.
type AtendimentoCreateData = Parameters<AtendimentoModel['create']>[0]['data'];
// Define o tipo para a atualização de um atendimento.
type AtendimentoUpdateData = Parameters<AtendimentoModel['update']>[0]['data'];


// Função para criar um novo atendimento no banco de dados.
// Usando 'AtendimentoType' como tipo de retorno (ou ajuste para a exportação real do Prisma)
export const create = async (data: AtendimentoCreateData): Promise<AtendimentoType> => {
 return prisma.atendimento.create({
  data,
 });
};

// Função para buscar todos os atendimentos no banco de dados.
export const getAll = async (): Promise<AtendimentoType[]> => {
 return prisma.atendimento.findMany();
};

// Função para buscar um atendimento pelo ID no banco de dados.
export const getById = async (id: number): Promise<AtendimentoType | null> => {
 return prisma.atendimento.findUnique({ where: { id } });
};

// Função para atualizar um atendimento no banco de dados.
export const update = async (id: number, data: AtendimentoUpdateData): Promise<AtendimentoType> => {
 return prisma.atendimento.update({
 where: { id },
 data,
 });
};

// Função para remover um atendimento do banco de dados.
export const remove = async (id: number): Promise<AtendimentoType> => {
 return prisma.atendimento.delete({ where: { id } });
};