import { Request, Response, NextFunction } from 'express';
import { servicoService } from '../services/servicoServices.js';
import { paginationSchema } from '../schemas/index.js';
import { z } from 'zod';

const servicoQuerySchema = paginationSchema.extend({
  ativo: z.coerce.boolean().optional(),
});

export const servicoController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = servicoQuerySchema.parse(req.query);
      const result = await servicoService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const servico = await servicoService.findById(id);
      res.json({ success: true, data: servico });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const servico = await servicoService.create(req.body);
      res.status(201).json({ success: true, data: servico });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const servico = await servicoService.update(id, req.body);
      res.json({ success: true, data: servico });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await servicoService.delete(id);
      res.json({ success: true, message: 'Serviço excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async getAtivos(req: Request, res: Response, next: NextFunction) {
    try {
      const servicos = await servicoService.getAtivos();
      res.json({ success: true, data: servicos });
    } catch (error) {
      next(error);
    }
  },
};
