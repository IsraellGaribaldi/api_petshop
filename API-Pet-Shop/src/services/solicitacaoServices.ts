// src/services/solicitacaoServices.ts

// 1. CORRIGIDO: Importação nomeada { prisma } E a extensão .ts
import { prisma } from '../db/prisma/prisma.ts';

// 2. REMOVIDO: A importação de tipos de '../generated/prisma' para evitar erros de compilação.
// 3. CORRIGIDO: Inferência de Tipos a partir da instância do Prisma.
type SolicitacaoModel = typeof prisma.solicitacao;
type SolicitacaoType = Awaited<ReturnType<SolicitacaoModel['findFirst']>>;
type SolicitacaoCreateData = Parameters<SolicitacaoModel['create']>[0]['data'];
type SolicitacaoUpdateData = Parameters<SolicitacaoModel['update']>[0]['data'];

// --- Funções CRUD ---

/**
 * Cria uma nova solicitação no banco de dados.
 * @param data Os dados para criar a solicitação (descricao, status).
 * @returns A solicitação recém-criada.
 */
export const create = async (data: SolicitacaoCreateData): Promise<SolicitacaoType> => {
  return prisma.solicitacao.create({
  data,
  });
};

/**
 * Busca todas as solicitações no banco de dados.
 * @returns Uma lista de todas as solicitações.
 */
export const getAll = async (): Promise<SolicitacaoType[]> => {
 return prisma.solicitacao.findMany();
};

/**
 * Busca uma solicitação pelo ID.
 * @param id O ID da solicitação a ser buscada.
 * @returns A solicitação encontrada ou null se não existir.
 */
export const getById = async (id: number): Promise<SolicitacaoType | null> => {
   return prisma.solicitacao.findUnique({ where: { id } });
};

/**
 * Atualiza uma solicitação pelo ID.
 * @param id O ID da solicitação a ser atualizada.
 * @param data Os dados a serem atualizados (parciais).
 * @returns A solicitação atualizada.
 */
export const update = async (id: number, data: SolicitacaoUpdateData): Promise<SolicitacaoType> => {
 return prisma.solicitacao.update({
  where: { id },
  data,
 });
};

/**
 * Remove uma solicitação pelo ID.
 * @param id O ID da solicitação a ser removida.
 * @returns A solicitação removida (o Prisma retorna o objeto deletado).
 */
export const remove = async (id: number): Promise<SolicitacaoType> => {
 return prisma.solicitacao.delete({ where: { id } });
};