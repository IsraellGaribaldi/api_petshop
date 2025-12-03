// Importa os tipos Request e Response do Express
import { Request, Response } from 'express';

// ✅ CORREÇÃO: Importação sem a extensão .ts no final
import * as atendimentoServices from '../services/atendimentoServices';

// Exporta a função 'atendimento' (Criar)
export const atendimento = async (req: Request, res: Response) => {
  try {
    const newAtendimento = await atendimentoServices.create(req.body);

    // Se der certo, retorna status HTTP 201 (Created)
    return res.status(201).json(newAtendimento);

  } catch (error: any) {
    // Se ocorrer um erro e ele tiver o código 'P2002' (erro de campo único duplicado no Prisma)
    if (error.code === 'P2002') {
      return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
    }

    // Erro genérico
    return res.status(500).json({ message: error.message });
  }
};

// ✅ CORREÇÃO PRINCIPAL: getAllAtendimento agora aceita filtro
export const getAllAtendimento = async (req: Request, res: Response) => {
  try {
    // 1. Tenta ler o clienteId dos parâmetros de consulta da URL (ex: ?clienteId=123)
    const clienteIdQuery = req.query.clienteId as string;
    let clienteId: number | undefined;

    // 2. Se existir e for um número válido, converte
    if (clienteIdQuery && !isNaN(Number(clienteIdQuery))) {
      clienteId = Number(clienteIdQuery);
    }

    // 3. Passa o ID (ou undefined) para o serviço
    const atendimento = await atendimentoServices.getAll(clienteId);
    
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