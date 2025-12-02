// 📄 services/SolicitacaoServices.ts

import axios from "axios";
import type { Solicitacao } from "../types/solicitacao"; // Certifique-se de que o path está correto

const API_BASE = "http://localhost:3333";

// --- Tipos Auxiliares para o Serviço ---

// Tipo para dados de criação: Omitimos campos gerados pelo servidor (id, datas e status inicial)
// Adicionamos 'clienteId' pois é crucial para a criação
export type SolicitacaoCreateData = Omit<Solicitacao, "id" | "createdAt" | "updatedAt" | "status">;

// Tipo para dados de atualização: Omitimos campos que não podem ser atualizados (id, clienteId, datas)
export type SolicitacaoUpdateData = Partial<Omit<Solicitacao, "id" | "clienteId" | "createdAt" | "updatedAt">>;


// --- Funções de Leitura ---

/**
 * Busca todas as solicitações (Usado pela página do Funcionário)
 */
export const getSolicitacoes = async (): Promise<Solicitacao[]> => {
  const res = await axios.get<Solicitacao[]>(`${API_BASE}/solicitacoes`);
  return res.data;
};

/**
 * Busca solicitações de um cliente específico (Usado pela página do Cliente)
 */
export const getSolicitacoesByClienteId = async (clienteId: number): Promise<Solicitacao[]> => {
  const res = await axios.get<Solicitacao[]>(`${API_BASE}/solicitacoes?clienteId=${clienteId}`);
  return res.data;
};


// --- Funções de Manipulação ---

/**
 * Cria uma nova solicitação (Usado pelo CriarSolicitacaoModal do Cliente)
 */
export const createSolicitacao = async (
  dados: SolicitacaoCreateData
): Promise<Solicitacao> => {
  // O servidor deve atribuir o 'status' inicial (ex: 'Pendente')
  const res = await axios.post<Solicitacao>(`${API_BASE}/solicitacoes`, dados);
  return res.data;
};

/**
 * Atualiza uma solicitação existente (Usado pelo AcaoSolicitacaoModal do Funcionário)
 */
export const updateSolicitacao = async (
  id: number,
  dados: SolicitacaoUpdateData
): Promise<Solicitacao> => {
  // Os dados geralmente conterão apenas { status: 'Concluída' } ou { status: 'Cancelada' }
  const res = await axios.patch<Solicitacao>(`${API_BASE}/solicitacoes/${id}`, dados);
  // Usamos PATCH pois geralmente estamos atualizando apenas uma pequena parte do objeto (o status)
  return res.data;
};

/**
 * Deleta uma solicitação
 */
export const deleteSolicitacao = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/solicitacoes/${id}`);
};


export default {
  getSolicitacoes,
  getSolicitacoesByClienteId,
  createSolicitacao,
  updateSolicitacao,
  deleteSolicitacao,
};