// Importa a instância do PrismaClient para interagir com o banco de dados.
import { prisma } from '../db/prisma/prisma.ts';
// Importa o tipo Atendimento gerado pelo Prisma.
import { Atendimento } from '../generated/prisma';

// Define o tipo para a criação de um novo atendimento. Omitimos 'id', 'createdAt' e 'updatedAt' porque são gerenciados pelo banco de dados.
type AtendimentoCreateData = Omit<Atendimento, 'id' | 'createdAt' | 'updatedAt'>;
// Define o tipo para a atualização de um atendimento. Partial torna todos os campos de AtendimentoCreateData opcionais.
type AtendimentoUpdateData = Partial<AtendimentoCreateData>;

// Função para criar um novo atendimento no banco de dados.
export const create = async (data: AtendimentoCreateData): Promise<Atendimento> => {
  return prisma.atendimento.create({
    data,
  });
};

// Função para buscar todos os atendimentos no banco de dados.
export const getAll = async (): Promise<Atendimento[]> => {
  return prisma.atendimento.findMany();
};

// Função para buscar um atendimento pelo ID no banco de dados.
export const getById = async (id: number): Promise<Atendimento | null> => {
  return prisma.atendimento.findUnique({ where: { id } });
};

// Função para atualizar um atendimento no banco de dados.
export const update = async (id: number, data: AtendimentoUpdateData): Promise<Atendimento> => {
  return prisma.atendimento.update({
    where: { id },
    data,
  });
};

// Função para remover um atendimento do banco de dados.
export const remove = async (id: number): Promise<Atendimento> => {
  return prisma.atendimento.delete({ where: { id } });
};