// Importa os tipos Request e Response do Express (para tipar as requisições e respostas HTTP)
import { Request, Response } from 'express';

// Importa todas as funções do serviço de pets (create, getAll, getById, update, remove)
import * as petService from '../services/petServices.ts';


export const createPet = async (req: Request, res: Response) => {
  try {
    // Chama a função 'create' do serviço de pets, passando os dados enviados no corpo da requisição (req.body)
    const newPet = await petService.create(req.body);

    // Retorna status 201 (Created) e o pet recém-criado em formato JSON
    return res.status(201).json(newPet);

  } catch (error: any) {
    // Se ocorrer um erro de duplicação de campo único (erro P2002 do Prisma)
    if (error.code === 'P2002') {
      // Retorna status 409 (Conflito) com mensagem informando o campo duplicado
      return res.status(409).json({ message: `Campo único já existe: ${error.meta.target}` });
    }

    // Se for outro erro → retorna status 500 (Erro interno do servidor)
    return res.status(500).json({ message: error.message });
  }
};


export const getAllPets = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que busca todos os pets
    const pets = await petService.getAll();

    // Retorna a lista completa em formato JSON
    return res.json(pets);

  } catch (error: any) {
    // Se houver erro interno → status 500 com mensagem
    return res.status(500).json({ message: error.message });
  }
};

export const getPetById = async (req: Request, res: Response) => {
  try {
    // Converte o ID da URL para número e chama o serviço que busca o pet
    const pet = await petService.getById(Number(req.params.id));

    // Se o pet não for encontrado → retorna erro 404 (Not Found)
    if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });
    // Caso exista → retorna os dados do pet
    return res.json(pet);

  } catch (error: any) {
    // Se ocorrer erro → status 500 com mensagem
    return res.status(500).json({ message: error.message });
  }
};


export const updatePet = async (req: Request, res: Response) => {
  try {
    // Atualiza o pet com o ID informado e os novos dados enviados no corpo da requisição
    const pet = await petService.update(Number(req.params.id), req.body);

    // Retorna o pet atualizado
    return res.json(pet);

  } catch (error: any) {
    // Se o pet não existir (erro do Prisma P2025) → retorna erro 404
    if (error.code === 'P2025') return res.status(404).json({ message: 'Pet não encontrado' });

    // Caso contrário → erro 500 (interno)
    return res.status(500).json({ message: error.message });
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    // Chama o serviço que remove o pet com base no ID informado
    await petService.remove(Number(req.params.id));

    // Retorna status 204 (No Content) → sucesso sem corpo de resposta
    return res.status(204).send();

  } catch (error: any) {
    // Se o pet não existir → erro 404 (Not Found)
    if (error.code === 'P2025') return res.status(404).json({ message: 'Pet não encontrado' });

    // Outros erros → status 500 (Erro interno)
    return res.status(500).json({ message: error.message });
  }
};
