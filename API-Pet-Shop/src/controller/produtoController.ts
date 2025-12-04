import { Request, Response, NextFunction } from 'express';
import { produtoService } from '../services/produtoService.js';
import { paginationSchema } from '../schemas/index.js';
import { z } from 'zod';

const produtoQuerySchema = paginationSchema.extend({
  categoria: z.string().optional(),
  ativo: z.coerce.boolean().optional(),
});

export const produtoController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = produtoQuerySchema.parse(req.query);
      const result = await produtoService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const produto = await produtoService.findById(id);
      res.json({ success: true, data: produto });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const produto = await produtoService.create(req.body);
      res.status(201).json({ success: true, data: produto });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const produto = await produtoService.update(id, req.body);
      res.json({ success: true, data: produto });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await produtoService.delete(id);
      res.json({ success: true, message: 'Produto excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async getCategorias(req: Request, res: Response, next: NextFunction) {
    try {
      const categorias = await produtoService.getCategorias();
      res.json({ success: true, data: categorias });
    } catch (error) {
      next(error);
    }
  },

  async getBaixoEstoque(req: Request, res: Response, next: NextFunction) {
    try {
      const minimo = req.query.minimo ? parseInt(req.query.minimo as string) : 10;
      const produtos = await produtoService.getBaixoEstoque(minimo);
      res.json({ success: true, data: produtos });
    } catch (error) {
      next(error);
    }
  },
};
