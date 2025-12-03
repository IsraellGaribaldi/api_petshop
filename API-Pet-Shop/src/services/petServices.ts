// src/services/petServices.ts

// 1. CORRIGIDO: Importação nomeada { prisma } E a extensão .ts
import { prisma } from '../db/prisma/prisma.ts';

// 2. CORRIGIDO: Inferência de Tipos. Removemos a importação de Pet de '../generated/prisma'.
type PetModel = typeof prisma.pet;
type PetType = Awaited<ReturnType<PetModel['findFirst']>>; 
type PetCreateData = Parameters<PetModel['create']>[0]['data'];
type PetUpdateData = Parameters<PetModel['update']>[0]['data'];

// Função para criar um novo pet no banco de dados.
export const create = async (data: PetCreateData): Promise<PetType> => {
 return prisma.pet.create({
  data,
  });
};

// Função para buscar todos os pets no banco de dados.
export const getAll = async (): Promise<PetType[]> => {
  return prisma.pet.findMany();
};

// Função para buscar um pet pelo ID no banco de dados.
export const getById = async (id: number): Promise<PetType | null> => {
  return prisma.pet.findUnique({ where: { id } });
};

// Função para atualizar um pet no banco de dados.
export const update = async (id: number, data: PetUpdateData): Promise<PetType> => {
 return prisma.pet.update({
  where: { id },
  data,
 });
};

// Função para remover um pet do banco de dados.
export const remove = async (id: number): Promise<PetType> => {
 return prisma.pet.delete({ where: { id } });
};