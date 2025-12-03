import axios from "axios";

const API_URL = "http://localhost:3000/api/clientes";

export interface CreateClienteDTO {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  endereco: string;
}

export interface Cliente extends CreateClienteDTO {
  id: number;
}

export const ClienteService = {
  async getAll(): Promise<Cliente[]> {
    const response = await axios.get<Cliente[]>(API_URL);
    return response.data;
  },

  async getById(id: number): Promise<Cliente> {
    const response = await axios.get<Cliente>(`${API_URL}/${id}`);
    return response.data;
  },

  async create(cliente: CreateClienteDTO): Promise<Cliente> {
    const response = await axios.post<Cliente>(API_URL, cliente);
    return response.data;
  },

  async update(id: number, cliente: Cliente): Promise<Cliente> {
    const response = await axios.put<Cliente>(`${API_URL}/${id}`, cliente);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },
};
