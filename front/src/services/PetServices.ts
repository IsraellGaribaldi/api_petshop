import axios from "axios";
// Importa a interface Pet que você forneceu
import type { Pet } from "../types/Pet";

// Define a base da API
const API_BASE = "http://localhost:3333";

/**
 * Busca todos os pets da API.
 * @returns Uma Promise que resolve para um array de objetos Pet.
 */
export const getPets = async (): Promise<Pet[]> => {
  const res = await axios.get<Pet[]>(`${API_BASE}/pets`);
  return res.data;
};

/**
 * Deleta um pet pelo seu ID.
 * @param id O ID do pet a ser deletado.
 * @returns Uma Promise vazia (void) após a deleção.
 */
export const deletePet = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/pets/${id}`);
};

/**
 * Atualiza um pet existente.
 * @param id O ID do pet a ser atualizado.
 * @param dados Os novos dados do pet.
 * @returns Uma Promise que resolve para o objeto Pet atualizado.
 */
export const updatePet = async (id: number, dados: Pet): Promise<Pet> => {
  const res = await axios.put<Pet>(`${API_BASE}/pets/${id}`, dados);
  return res.data;
};

/**
 * Cria um novo pet.
 * Utiliza Omit para garantir que o ID não seja fornecido na criação.
 * @param dados Os dados do novo pet (sem o ID).
 * @returns Uma Promise que resolve para o objeto Pet criado.
 */
export const createPet = async (dados: Omit<Pet, "id">): Promise<Pet> => {
  const res = await axios.post<Pet>(`${API_BASE}/pets`, dados);
  return res.data;
};

// Exporta as funções para serem utilizadas em outros lugares
export default {
  getPets,
  deletePet,
  updatePet,
  createPet,
};