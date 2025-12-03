// 📄 services/atendimentoServices.ts

// Importa a instância do PrismaClient (já corrigido em arquivos anteriores).
import { prisma } from '../db/prisma/prisma.ts'; 

// LINHA REMOVIDA: import { Prisma } from '@prisma/client'; 
// A remoção desta linha elimina o erro ts(2305)


// 🎯 Inferência do tipo de RETORNO (o objeto Atendimento completo)
type AtendimentoType = Awaited<ReturnType<typeof prisma.atendimento.findFirst>>; 

// 🎯 Inferência do tipo de CRIAÇÃO (CreateInput) a partir do método .create
type AtendimentoCreateData = Parameters<typeof prisma.atendimento.create>[0]['data'];

// 🎯 Inferência do tipo de ATUALIZAÇÃO (UpdateInput) a partir do método .update
type AtendimentoUpdateData = Parameters<typeof prisma.atendimento.update>[0]['data'];

// 🎯 Inferência do tipo de FILTRO (WhereInput) a partir do método .findMany
type AtendimentoWhereInput = Parameters<typeof prisma.atendimento.findMany>[0]['where'];


// Função para criar um novo atendimento no banco de dados.
export const create = async (data: AtendimentoCreateData): Promise<AtendimentoType> => {
  return prisma.atendimento.create({
  data, 
 }) as Promise<AtendimentoType>; 
};

/**
 * Função para buscar todos os atendimentos no banco de dados, 
 * opcionalmente filtrando por cliente.
 */
export const getAll = async (clienteId?: number): Promise<AtendimentoType[]> => {
 const filter: AtendimentoWhereInput = {}; 


 if (clienteId) {
    filter.pet = {
       clienteId: clienteId 
};
}
 return prisma.atendimento.findMany({
  where: filter, 
  include: { 
  pet: {
  include: {
  cliente: true // Inclui o dono (Cliente)
  }
 },
 funcionario: true,
 }, 
 orderBy: { 
 dataHora: 'desc', // Ordenação tipada corretamente
 }
 }) as Promise<AtendimentoType[]>;
};

// Função para buscar um atendimento pelo ID no banco de dados.
export const getById = async (id: number): Promise<AtendimentoType | null> => {
 return prisma.atendimento.findUnique({ 
   where: { id },
    // Garante que as relações são incluídas na busca por ID
    include: { pet: true, funcionario: true } 
 }) as Promise<AtendimentoType | null>;
};

// Função para atualizar um atendimento no banco de dados.
export const update = async (id: number, data: AtendimentoUpdateData): Promise<AtendimentoType> => {
// ...
 return prisma.atendimento.update({
 where: { id },
 data, 
 }) as Promise<AtendimentoType>;
};

// Função para remover um atendimento do banco de dados.
export const remove = async (id: number): Promise<AtendimentoType> => {
 return prisma.atendimento.delete({ where: { id } }) as Promise<AtendimentoType>;
};