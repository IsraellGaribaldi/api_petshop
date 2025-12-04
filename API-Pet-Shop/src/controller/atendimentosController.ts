import { Request, Response, NextFunction } from 'express';
import { atendimentoService } from '../services/atendimentoServices';
import { paginationSchema } from '../schemas/index';
import { z } from 'zod';

const atendimentoQuerySchema = paginationSchema.extend({
  status: z.enum(['agendado', 'em_andamento', 'concluido', 'cancelado']).optional(),
  funcionarioId: z.coerce.number().int().positive().optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
});

export const atendimentoController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = atendimentoQuerySchema.parse(req.query);
      const result = await atendimentoService.findAll(query);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const atendimento = await atendimentoService.findById(id);
      res.json({ success: true, data: atendimento });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const atendimento = await atendimentoService.create(req.body);
      res.status(201).json({ success: true, data: atendimento });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const atendimento = await atendimentoService.update(id, req.body);
      res.json({ success: true, data: atendimento });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await atendimentoService.delete(id);
      res.json({ success: true, message: 'Atendimento excluído com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  async getHoje(req: Request, res: Response, next: NextFunction) {
    try {
      const atendimentos = await atendimentoService.getAgendamentosHoje();
      res.json({ success: true, data: atendimentos });
    } catch (error) {
      next(error);
    }
  },

  async getProximos(req: Request, res: Response, next: NextFunction) {
    try {
      const dias = req.query.dias ? parseInt(req.query.dias as string) : 7;
      const atendimentos = await atendimentoService.getProximosAgendamentos(dias);
      res.json({ success: true, data: atendimentos });
    } catch (error) {
      next(error);
    }
  },
};
