import { Request, Response, NextFunction } from 'express';
import { clienteService } from '../services/clienteServices.js';
import { paginationSchema } from '../schemas/index.js';

export const clienteController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = paginationSchema.parse(req.query);
      const result = await clienteService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const cliente = await clienteService.findById(id);
      res.json({ success: true, data: cliente });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = await clienteService.create(req.body);
      res.status(201).json({ success: true, data: cliente });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const cliente = await clienteService.update(id, req.body);
      res.json({ success: true, data: cliente });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await clienteService.delete(id);
      res.json({ success: true, message: 'Cliente excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },
};
