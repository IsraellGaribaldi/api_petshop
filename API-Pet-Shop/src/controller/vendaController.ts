import { Request, Response, NextFunction } from 'express';
import { vendaService } from '../services/vendaServices.js';
import { paginationSchema } from '../schemas/index.js';
import { z } from 'zod';

const vendaQuerySchema = paginationSchema.extend({
  status: z.enum(['pendente', 'pago', 'cancelado']).optional(),
  clienteId: z.coerce.number().int().positive().optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
});

export const vendaController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = vendaQuerySchema.parse(req.query);
      const result = await vendaService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const venda = await vendaService.findById(id);
      res.json({ success: true, data: venda });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const venda = await vendaService.create(req.body);
      res.status(201).json({ success: true, data: venda });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const venda = await vendaService.update(id, req.body);
      res.json({ success: true, data: venda });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await vendaService.delete(id);
      res.json({ success: true, message: 'Venda excluída com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async getEstatisticas(req: Request, res: Response, next: NextFunction) {
    try {
      const { dataInicio, dataFim } = req.query;
      const stats = await vendaService.getEstatisticas(
        dataInicio as string | undefined,
        dataFim as string | undefined
      );
      res.json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  },
};
