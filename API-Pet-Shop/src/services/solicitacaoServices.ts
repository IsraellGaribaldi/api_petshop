
// Importa a instância do PrismaClient para interagir com o banco de dados.
import prisma from '../db/prisma/prisma'; // Assumindo que o caminho é o mesmo
// Importa o tipo Solicitacao gerado pelo Prisma (você precisará ter rodado 'prisma generate').
import { solicitacao } from '../generated/prisma'; // Assumindo que o nome do tipo gerado é Solicitacao

// --- Tipagem de Dados ---

// Define o tipo para a criação de uma nova solicitação.
// Omitimos 'id', 'createdAt' e 'updatedAt' porque são gerenciados pelo banco de dados (Prisma/DB).
type SolicitacaoCreateData = Omit<solicitacao, 'id' | 'createdAt' | 'updatedAt'>;

// Define o tipo para a atualização de uma solicitação.
// Partial torna todos os campos de SolicitacaoCreateData opcionais.
type SolicitacaoUpdateData = Partial<SolicitacaoCreateData>;

// --- Funções CRUD ---

/**
 * Cria uma nova solicitação no banco de dados.
 * @param data Os dados para criar a solicitação (descricao, status).
 * @returns A solicitação recém-criada.
 */
export const create = async (data: SolicitacaoCreateData): Promise<solicitacao> => {
  return prisma.solicitacao.create({
    data,
  });
};

/**
 * Busca todas as solicitações no banco de dados.
 * @returns Uma lista de todas as solicitações.
 */
export const getAll = async (): Promise<solicitacao[]> => {
  return prisma.solicitacao.findMany();
};

/**
 * Busca uma solicitação pelo ID.
 * @param id O ID da solicitação a ser buscada.
 * @returns A solicitação encontrada ou null se não existir.
 */
export const getById = async (id: number): Promise<solicitacao | null> => {
  return prisma.solicitacao.findUnique({ where: { id } });
};

/**
 * Atualiza uma solicitação pelo ID.
 * @param id O ID da solicitação a ser atualizada.
 * @param data Os dados a serem atualizados (parciais).
 * @returns A solicitação atualizada.
 */
export const update = async (id: number, data: SolicitacaoUpdateData): Promise<solicitacao> => {
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
export const remove = async (id: number): Promise<solicitacao> => {
  return prisma.solicitacao.delete({ where: { id } });
};