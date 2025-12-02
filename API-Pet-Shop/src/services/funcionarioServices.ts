// Importa a instância do PrismaClient para interagir com o banco de dados.
import  prisma  from '../db/prisma/prisma';
// Importa o tipo Funcionario gerado pelo Prisma.
import { Funcionario } from '../generated/prisma';

// Define o tipo para a criação de um novo funcionário. Omitimos 'id', 'createdAt' e 'updatedAt' porque são gerenciados pelo banco de dados.
type FuncionarioCreateData = Omit<Funcionario, 'id' | 'createdAt' | 'updatedAt'>;
// Define o tipo para a atualização de um funcionário. Partial torna todos os campos de FuncionarioCreateData opcionais.
type FuncionarioUpdateData = Partial<FuncionarioCreateData>;

// Função para criar um novo funcionário no banco de dados.
export const create = async (data: FuncionarioCreateData): Promise<Funcionario> => {
  return prisma.funcionario.create({
    data,
  });
};

// Função para buscar todos os funcionários no banco de dados.
export const getAll = async (): Promise<Funcionario[]> => {
  return prisma.funcionario.findMany();
};

// Função para buscar um funcionário pelo ID no banco de dados.
export const getById = async (id: number): Promise<Funcionario | null> => {
  return prisma.funcionario.findUnique({ where: { id } });
};

// Função para atualizar um funcionário no banco de dados.
export const update = async (id: number, data: FuncionarioUpdateData): Promise<Funcionario> => {
  return prisma.funcionario.update({
    where: { id },
    data,
  });
};

// Função para remover um funcionário do banco de dados.
export const remove = async (id: number): Promise<Funcionario> => {
  return prisma.funcionario.delete({ where: { id } });
};