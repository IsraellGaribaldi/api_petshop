// Importa a instância do PrismaClient para interagir com o banco de dados.
import  prisma  from '../db/prisma/prisma';
// Importa o tipo Pet gerado pelo Prisma.
import { Pet } from '../generated/prisma';

// Define o tipo para a criação de um novo pet. Omitimos 'id', 'createdAt' e 'updatedAt' porque são gerenciados pelo banco de dados.
type PetCreateData = Omit<Pet, 'id' | 'createdAt' | 'updatedAt'>;
// Define o tipo para a atualização de um pet. Partial torna todos os campos de PetCreateData opcionais.
type PetUpdateData = Partial<PetCreateData>;

// Função para criar um novo pet no banco de dados.
export const create = async (data: PetCreateData): Promise<Pet> => {
  return prisma.pet.create({
    data,
  });
};

// Função para buscar todos os pets no banco de dados.
export const getAll = async (): Promise<Pet[]> => {
  return prisma.pet.findMany();
};

// Função para buscar um pet pelo ID no banco de dados.
export const getById = async (id: number): Promise<Pet | null> => {
  return prisma.pet.findUnique({ where: { id } });
};

// Função para atualizar um pet no banco de dados.
export const update = async (id: number, data: PetUpdateData): Promise<Pet> => {
  return prisma.pet.update({
    where: { id },
    data,
  });
};

// Função para remover um pet do banco de dados.
export const remove = async (id: number): Promise<Pet> => {
  return prisma.pet.delete({ where: { id } });
};