import axios from 'axios';

const API_URL = 'http://localhost:3000/api/funcionarios';

export interface CreateFuncionarioDTO {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    endereco: string;
}

export interface Funcionario extends CreateFuncionarioDTO {
    id: number;
    createdat: string;
    updatedat: string;
}

export const FuncionarioService = {
    async getAll(): Promise<Funcionario[]> {
        const response = await axios.get<Funcionario[]>(API_URL);
        return response.data;
    },

    async getById(id: number): Promise<Funcionario> {
        const response = await axios.get<Funcionario>(`${API_URL}/${id}`);
        return response.data;
    },

async create(funcionario: CreateFuncionarioDTO): Promise<Funcionario> {
    const response = await axios.post<Funcionario>(API_URL, funcionario);
    return response.data;
},

async update(id: number, funcionario: Funcionario): Promise<Funcionario> {
        const response = await axios.put<Funcionario>(`${API_URL}/${id}`, funcionario);
        return response.data;
    },

    async delete(id: number): Promise<void> {
        await axios.delete(`${API_URL}/${id}`);
    }
};