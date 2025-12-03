// Importa os tipos Request e Response do Express, usados para tipar as requisições e respostas HTTP
import { Request, Response } from 'express';

// Importa todas as funções do serviço de funcionários (create, getAll, getById, update, remove)
import * as funcionarioService from '../services/funcionarioServices.ts';


export const createFuncionario = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que cria o funcionário, passando os dados do corpo da requisição (req.body)
    const newFuncionario = await funcionarioService.create(req.body);

    // Retorna status 201 (Created) e o funcionário criado em formato JSON
    return res.status(201).json(newFuncionario);

  } catch (error: any) {
    // Se o erro for de duplicação de campo único (erro do Prisma P2002)
    if (error.code === 'P2002') {
      // Retorna erro 409 (Conflito) informando qual campo único já existe
      return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
    }

    // Se for outro erro → retorna status 500 (Erro interno do servidor)
    return res.status(500).json({ message: error.message });
  }
};


export const getAllFuncionarios = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que busca todos os funcionários
    const funcionarios = await funcionarioService.getAll();

    // Retorna a lista de funcionários em formato JSON
    return res.json(funcionarios);

  } catch (error: any) {
    // Em caso de erro → status 500 (erro interno)
    return res.status(500).json({ message: error.message });
  }
};


export const getFuncionarioById = async (req: Request, res: Response) => {
  try {
    // Converte o ID passado na URL (req.params.id) para número e busca o funcionário no banco
    const funcionario = await funcionarioService.getById(Number(req.params.id));

    // Se o funcionário não for encontrado → retorna erro 404 (Not Found)
    if (!funcionario) return res.status(404).json({ message: 'Funcionário não encontrado' });

    // Caso o funcionário exista → retorna os dados dele
    return res.json(funcionario);

  } catch (error: any) {
    // Se ocorrer erro → status 500 com a mensagem
    return res.status(500).json({ message: error.message });
  }
};


export const updateFuncionario = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que atualiza o funcionário com o ID e os novos dados (req.body)
    const funcionario = await funcionarioService.update(Number(req.params.id), req.body);

    // Retorna o funcionário atualizado
    return res.json(funcionario);

  } catch (error: any) {
    // Erro P2025 → registro não encontrado no banco (erro do Prisma)
    if (error.code === 'P2025') return res.status(404).json({ message: 'Funcionário não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};


export const deleteFuncionario = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que remove o funcionário com base no ID passado na URL
    await funcionarioService.remove(Number(req.params.id));

    // Retorna status 204 (No Content) → sucesso sem corpo de resposta
    return res.status(204).send();

  } catch (error: any) {
    // Se o funcionário não existir → retorna erro 404
    if (error.code === 'P2025') return res.status(404).json({ message: 'Funcionário não encontrado' });

    // Outros erros → status 500
    return res.status(500).json({ message: error.message });
  }
};
