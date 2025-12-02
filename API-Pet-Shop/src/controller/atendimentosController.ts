// Importa os tipos Request e Response do Express, usados para tipar os parâmetros das funções de rota
import { Request, Response } from 'express';

// Importa todas as funções do módulo 'atendimentoServices' e as agrupa no objeto 'atendimentoService'
import * as atendimentoServices from '../services/atendimentoServices';

// Exporta a função 'atendimento' (usada como controlador de rota no Express)
export const atendimento = async (req: Request, res: Response) => {
  try {
    const newAtendimento = await atendimentoServices.create(req.body);

    // Se der certo, retorna status HTTP 201 (Created) e o objeto do atendimento criado em formato JSON
    return res.status(201).json(newAtendimento);

  } catch (error: any) {
    // Se ocorrer um erro e ele tiver o código 'P2002' (erro de campo único duplicado no Prisma)
    if (error.code === 'P2002') {
      // Retorna status 409 (Conflito) e uma mensagem informando qual campo único já existe
      return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
    }

    
    // e a mensagem de erro para ajudar na depuração
    return res.status(500).json({ message: error.message });
  }
};

export const getAllAtendimento = async (req: Request, res: Response) => {
  try {
    const atendimento = await atendimentoServices.getAll();
    return res.json(atendimento);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAtendimentoById = async (req: Request, res: Response) => {
  try {
    // Converte o parâmetro de rota (req.params.id) para número
    const atendimento = await atendimentoServices.getById(Number(req.params.id));

    // Se o atendimento não for encontrado → retorna erro 404 (Not Found)
    if (!atendimento) return res.status(404).json({ message: 'atendimento não encontrado' });

    // Caso contrário → retorna o atendimento encontrado
    return res.json(atendimento);

  } catch (error: any) {
    // Em caso de erro inesperado → retorna status 500
    return res.status(500).json({ message: error.message });
  }
};


export const updateAtendimento = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que atualiza o atendimento com o ID e os novos dados
    const atendimento = await atendimentoServices.update(Number(req.params.id), req.body);

    // Retorna o atendimento atualizado
    return res.json(atendimento);

  } catch (error: any) {
    // Erro P2025 → registro não encontrado no Prisma
    if (error.code === 'P2025') return res.status(404).json({ message: 'atendimento não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};


export const deleteAtendimento  = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que remove o atendimento pelo ID
    await atendimentoServices.remove(Number(req.params.id));

    // Retorna status 204 (No Content) → exclusão bem-sucedida sem corpo na resposta
    return res.status(204).send();

  } catch (error: any) {
    // Erro P2025 → atendimento não encontrado
    if (error.code === 'P2025') return res.status(404).json({ message: 'atendimento não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};