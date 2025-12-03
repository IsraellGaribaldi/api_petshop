// 📄 services/atendimentoServices.ts

// Importa a instância do PrismaClient (já corrigido em arquivos anteriores).
import { prisma } from '../db/prisma/prisma.ts'; 



// 🎯 SOLUÇÃO 1: Inferir o tipo do modelo (o objeto Atendimento que será retornado).
type AtendimentoType = Awaited<ReturnType<typeof prisma.atendimento.findFirst>>; 


import { Prisma } from '@prisma/client';


// ✅ CORREÇÃO 1: Usa o tipo Input do Prisma para criação.
type AtendimentoCreateData = Prisma.AtendimentoCreateInput; 

// ✅ CORREÇÃO 2: Usa o tipo Update Input do Prisma para atualização.
type AtendimentoUpdateData = Prisma.AtendimentoUpdateInput;


// Função para criar um novo atendimento no banco de dados.
export const create = async (data: AtendimentoCreateData): Promise<AtendimentoType> => {
 // Agora 'data' é tipado corretamente para o método create
 return prisma.atendimento.create({
    data, 
   }) as Promise<AtendimentoType>; // Usando type assertion para garantir o retorno
};

/**
 * Função para buscar todos os atendimentos no banco de dados, 
 * opcionalmente filtrando por cliente.
 * @param clienteId Opcional. ID do cliente para filtrar.
 */
export const getAll = async (clienteId?: number): Promise<AtendimentoType[]> => {
  
  const filter: Prisma.AtendimentoWhereInput = {}; 

 
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
 // Agora 'data' é tipado corretamente para o método update
   return prisma.atendimento.update({
     where: { id },
     data, 
   }) as Promise<AtendimentoType>;
};

// Função para remover um atendimento do banco de dados.
export const remove = async (id: number): Promise<AtendimentoType> => {
  return prisma.atendimento.delete({ where: { id } }) as Promise<AtendimentoType>;
};