import { Request, Response, NextFunction } from 'express';
import { petService } from '../services/petServices.js';
import { paginationSchema } from '../schemas/index.js';
import { z } from 'zod';

const petQuerySchema = paginationSchema.extend({
  especie: z.string().optional(),
  clienteId: z.coerce.number().int().positive().optional(),
});

export const petController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = petQuerySchema.parse(req.query);
      const result = await petService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const pet = await petService.findById(id);
      res.json({ success: true, data: pet });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const pet = await petService.create(req.body);
      res.status(201).json({ success: true, data: pet });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const pet = await petService.update(id, req.body);
      res.json({ success: true, data: pet });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await petService.delete(id);
      res.json({ success: true, message: 'Pet excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async findByCliente(req: Request, res: Response, next: NextFunction) {
    try {
      const clienteId = parseInt(req.params.clienteId);
      const pets = await petService.findByCliente(clienteId);
      res.json({ success: true, data: pets });
    } catch (error) {
      next(error);
    }
  },
};
