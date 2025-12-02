// Importa os tipos Request e Response do Express para tipagem
import { Request, Response } from 'express';

// Importa todas as funções do serviço de solicitações (assumindo que o nome do arquivo de serviço é 'solicitacaoServices')
import * as solicitacaoService from '../services/solicitacaoServices';

/**
 * Cria uma nova solicitação.
 * POST /api/solicitacoes
 */
export const createSolicitacao = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que cria a solicitação, passando os dados do corpo da requisição
    const newSolicitacao = await solicitacaoService.create(req.body);

    // Retorna status 201 (Created) e a solicitação criada
    return res.status(201).json(newSolicitacao);

  } catch (error: any) {
    // Se for outro erro → retorna status 500 (Erro interno do servidor)
    return res.status(500).json({ message: error.message });
  }
};

// ---

/**
 * Busca todas as solicitações.
 * GET /api/solicitacoes
 */
export const getAllSolicitacoes = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que busca todas as solicitações
    const solicitacoes = await solicitacaoService.getAll();

    // Retorna a lista de solicitações
    return res.json(solicitacoes);

  } catch (error: any) {
    // Em caso de erro → status 500 (erro interno)
    return res.status(500).json({ message: error.message });
  }
};

// ---

/**
 * Busca uma solicitação pelo ID.
 * GET /api/solicitacoes/:id
 */
export const getSolicitacaoById = async (req: Request, res: Response) => {
  try {
    // Converte o ID para número e busca a solicitação no banco
    const solicitacao = await solicitacaoService.getById(Number(req.params.id));

    // Se a solicitação não for encontrada → retorna erro 404 (Not Found)
    if (!solicitacao) return res.status(404).json({ message: 'Solicitação não encontrada' });

    // Caso a solicitação exista → retorna os dados dela
    return res.json(solicitacao);

  } catch (error: any) {
    // Se ocorrer erro → status 500 com a mensagem
    return res.status(500).json({ message: error.message });
  }
};

// ---

/**
 * Atualiza uma solicitação pelo ID.
 * PUT/PATCH /api/solicitacoes/:id
 */
export const updateSolicitacao = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que atualiza a solicitação com o ID e os novos dados (req.body)
    const solicitacao = await solicitacaoService.update(Number(req.params.id), req.body);

    // Retorna a solicitação atualizada
    return res.json(solicitacao);

  } catch (error: any) {
    // Erro P2025 (Prisma) → registro não encontrado no banco
    if (error.code === 'P2025') return res.status(404).json({ message: 'Solicitação não encontrada para atualização' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};

// ---

/**
 * Deleta uma solicitação pelo ID.
 * DELETE /api/solicitacoes/:id
 */
export const deleteSolicitacao = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que remove a solicitação com base no ID
    await solicitacaoService.remove(Number(req.params.id));

    // Retorna status 204 (No Content) → sucesso sem corpo de resposta
    return res.status(204).send();

  } catch (error: any) {
    // Se a solicitação não existir (Erro P2025 do Prisma) → retorna erro 404
    if (error.code === 'P2025') return res.status(404).json({ message: 'Solicitação não encontrada para exclusão' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};