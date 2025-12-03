// Importa os tipos Request e Response do Express para tipar as funções dos controladores
import { type Request, type Response } from 'express';

// Importa todas as funções do serviço de cliente (create, getAll, getById, update, remove)
import * as clienteService from '../services/clienteServices.ts';


export const createCliente = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que cria o cliente, passando os dados do corpo da requisição (req.body)
    const newCliente = await clienteService.create(req.body);

    // Retorna status 201 (Created) e o novo cliente criado em formato JSON
    return res.status(201).json(newCliente);

  } catch (error: any) {
    // Erro P2002 → campo único duplicado (ex: email já existente no Prisma)
    if (error.code === 'P2002') {
      return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
    }

    // Qualquer outro erro → retorna status 500 (erro interno)
    return res.status(500).json({ message: error.message });
  }
};

export const getAllClientes = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que busca todos os clientes
    const clientes = await clienteService.getAll();

    // Retorna a lista de clientes em formato JSON
    return res.json(clientes);

  } catch (error: any) {
    // Se houver erro no servidor → retorna status 500
    return res.status(500).json({ message: error.message });
  }
};

export const getClienteById = async (req: Request, res: Response) => {
  try {
    // Converte o parâmetro de rota (req.params.id) para número
    const cliente = await clienteService.getById(Number(req.params.id));

    // Se o cliente não for encontrado → retorna erro 404 (Not Found)
    if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });

    // Caso contrário → retorna o cliente encontrado
    return res.json(cliente);
    

  } catch (error: any) {
    // Em caso de erro inesperado → retorna status 500
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que atualiza o cliente com o ID e os novos dados
    const cliente = await clienteService.update(Number(req.params.id), req.body);

    // Retorna o cliente atualizado
    return res.json(cliente);

  } catch (error: any) {
    // Erro P2025 → registro não encontrado no Prisma
    if (error.code === 'P2025') return res.status(404).json({ message: 'Cliente não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};

/* ===========================================================
   Função: deleteCliente
   Descrição: Exclui um cliente do banco de dados.
=========================================================== */
export const deleteCliente = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que remove o cliente pelo ID
    await clienteService.remove(Number(req.params.id));

    // Retorna status 204 (No Content) → exclusão bem-sucedida sem corpo na resposta
    return res.status(204).send();

  } catch (error: any) {
    // Erro P2025 → cliente não encontrado
    if (error.code === 'P2025') return res.status(404).json({ message: 'Cliente não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};
