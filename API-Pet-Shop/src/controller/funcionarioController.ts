import { Request, Response, NextFunction } from 'express';
import { funcionarioService } from '../services/funcionarioServices.js';
import { paginationSchema } from '../schemas/index.js';
import { z } from 'zod';

const funcionarioQuerySchema = paginationSchema.extend({
  cargo: z.string().optional(),
  ativo: z.coerce.boolean().optional(),
});

export const funcionarioController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = funcionarioQuerySchema.parse(req.query);
      const result = await funcionarioService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const funcionario = await funcionarioService.findById(id);
      res.json({ success: true, data: funcionario });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const funcionario = await funcionarioService.create(req.body);
      res.status(201).json({ success: true, data: funcionario });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const funcionario = await funcionarioService.update(id, req.body);
      res.json({ success: true, data: funcionario });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await funcionarioService.delete(id);
      res.json({ success: true, message: 'Funcionário excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async getCargos(req: Request, res: Response, next: NextFunction) {
    try {
      const cargos = await funcionarioService.getCargos();
      res.json({ success: true, data: cargos });
    } catch (error) {
      next(error);
    }
  },
};
