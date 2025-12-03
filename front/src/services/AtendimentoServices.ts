import axios from "axios";
import type { Atendimento } from "../types/Atendimento";

const API_BASE = "http://localhost:3333";

// ✅ CORREÇÃO: Adicionado o parâmetro opcional 'clienteId'
export const getAtendimentos = async (clienteId?: number): Promise<Atendimento[]> => {
  // Lógica para decidir a URL: se tiver ID, filtra; se não, traz tudo
  const url = clienteId 
    ? `${API_BASE}/atendimentos?clienteId=${clienteId}` 
    : `${API_BASE}/atendimentos`;

  const res = await axios.get<Atendimento[]>(url);
  return res.data;
};

export const deleteAtendimento = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/atendimentos/${id}`);
};

export const createAtendimento = async (
  dados: Omit<Atendimento, "id" | "pet" | "funcionario">
): Promise<Atendimento> => {
  const res = await axios.post<Atendimento>(`${API_BASE}/atendimentos`, dados);
  return res.data;
};

export const updateAtendimento = async (
  id: number,
  dados: Omit<Atendimento, "id" | "pet" | "funcionario">
): Promise<Atendimento> => {
  const res = await axios.put<Atendimento>(`${API_BASE}/atendimentos/${id}`, dados);
  return res.data;
};

export default {
  getAtendimentos,
  deleteAtendimento,
  createAtendimento,
  updateAtendimento,
};