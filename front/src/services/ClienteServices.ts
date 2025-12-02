import axios from "axios";
import type { Cliente } from "../types/Cliente";

const API_BASE = "http://localhost:3333";

export const getClientes = async (): Promise<Cliente[]> => {
  const res = await axios.get<Cliente[]>(`${API_BASE}/clientes`);
  return res.data;
};

export const deleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/clientes/${id}`);
};

export const updateCliente = async (
  id: number,
  dados: Cliente
): Promise<Cliente> => {
  const res = await axios.put<Cliente>(`${API_BASE}/clientes/${id}`, dados);
  return res.data;
};
export const createCliente = async (dados: Omit<Cliente, "id">): Promise<Cliente> => {
  const res = await axios.post<Cliente>(`${API_BASE}/clientes`, dados);
  return res.data;
};


export default {
    getClientes,
    deleteCliente,
    updateCliente,
};