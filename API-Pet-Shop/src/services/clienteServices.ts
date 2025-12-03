// Importa a instância do PrismaClient para interagir com o banco de dados.
import { prisma } from '../db/prisma/prisma.ts'; // CORRIGIDO: Adicionadas as chaves {}
// Importa o tipo Cliente gerado pelo Prisma.
import { Cliente } from '../generated/prisma'; 

// Define o tipo para a criação de um novo cliente. Omitimos 'id', 'createdAt' e 'updatedAt' porque são gerenciados pelo banco de dados.
type ClienteCreateData = Omit<Cliente, 'id' | 'createdAt' | 'updatedAt'>;
// Define o tipo para a atualização de um cliente. Partial torna todos os campos de ClienteCreateData opcionais.
type ClienteUpdateData = Partial<ClienteCreateData>;

// Função para criar um novo cliente no banco de dados.
export const create = async (data: ClienteCreateData): Promise<Cliente> => {
 return prisma.cliente.create({
 data,
 });
};

// Função para buscar todos os clientes no banco de dados.
export const getAll = async (): Promise<Cliente[]> => {
 return prisma.cliente.findMany();
};

// Função para buscar um cliente pelo ID no banco de dados.
export const getById = async (id: number): Promise<Cliente | null> => {
 return prisma.cliente.findUnique({ where: { id } });
};

// Função para atualizar um cliente no banco de dados.
export const update = async (id: number, data: ClienteUpdateData): Promise<Cliente> => {
 return prisma.cliente.update({
   where: { id },
  data,
 });
};

// Função para remover um cliente do banco de dados.
export const remove = async (id: number): Promise<Cliente> => {
 return prisma.cliente.delete({ where: { id } });
};