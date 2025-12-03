// 📄 services/atendimentoServices.ts

import { prisma } from '../db/prisma/prisma';

// Importa os tipos necessários diretamente do pacote principal do Prisma.
// Note que 'PrismaClient' não é necessário aqui se 'prisma' já está importado.
import { 
    Atendimento,     // O tipo do modelo (para retorno)
    Prisma,          // O namespace para WhereInput, OrderBy, etc.
} from '@prisma/client'; 

// --- DEFINIÇÃO DE TIPOS CORRIGIDA ---

// ✅ CORREÇÃO 1: Usa o tipo Input do Prisma para criação, que lida com as relações (connect/create).
type AtendimentoCreateData = Prisma.AtendimentoCreateInput; 

// ✅ CORREÇÃO 2: Usa o tipo Update Input do Prisma para atualização.
type AtendimentoUpdateData = Prisma.AtendimentoUpdateInput;

// ------------------------------------


// Função para criar um novo atendimento no banco de dados.
export const create = async (data: AtendimentoCreateData): Promise<Atendimento> => {
    // Agora 'data' é tipado corretamente para o método create
    return prisma.atendimento.create({
        data,
    });
};

/**
 * Função para buscar todos os atendimentos no banco de dados, 
 * opcionalmente filtrando por cliente.
 * @param clienteId Opcional. ID do cliente para filtrar.
 */
export const getAll = async (clienteId?: number): Promise<Atendimento[]> => {
    
    // O tipo Prisma.AtendimentoWhereInput é usado para o objeto 'where'
    const filter: Prisma.AtendimentoWhereInput = {}; 

    // APLICA a condição de filtro se o clienteId for fornecido
    if (clienteId) {
        // Filtra através da relação Pet, assumindo que Pet tem a chave 'clienteId'.
        filter.pet = {
            clienteId: clienteId 
        };
    }
    
    // Executa a query com o filtro
    return prisma.atendimento.findMany({
        where: filter, 
        
        // Inclui as relações para o frontend
        include: { 
            pet: {
                include: {
                    cliente: true // Inclui o dono (Cliente)
                }
            },
            funcionario: true,
        },
        
        orderBy: { 
            dataHora: 'desc', // Ordenação tipada corretamente
        }
    });
};

// Função para buscar um atendimento pelo ID no banco de dados.
export const getById = async (id: number): Promise<Atendimento | null> => {
    return prisma.atendimento.findUnique({ 
        where: { id },
        // Garante que as relações são incluídas na busca por ID
        include: { pet: true, funcionario: true } 
    });
};

// Função para atualizar um atendimento no banco de dados.
export const update = async (id: number, data: AtendimentoUpdateData): Promise<Atendimento> => {
    // Agora 'data' é tipado corretamente para o método update
    return prisma.atendimento.update({
        where: { id },
        data,
    });
};

// Função para remover um atendimento do banco de dados.
export const remove = async (id: number): Promise<Atendimento> => {
    return prisma.atendimento.delete({ where: { id } });
};