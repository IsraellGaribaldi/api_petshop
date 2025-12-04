import { Request, Response, NextFunction } from 'express';
import { dashboardService } from '../services/dashboardServices.js';

export const dashboardController = {
  async getResumo(req: Request, res: Response, next: NextFunction) {
    try {
      const resumo = await dashboardService.getResumo();
      res.json({ success: true, data: resumo });
    } catch (error) {
      next(error);
    }
  },

  async getAtendimentosRecentes(req: Request, res: Response, next: NextFunction) {
    try {
      const limite = req.query.limite ? parseInt(req.query.limite as string) : 5;
      const atendimentos = await dashboardService.getAtendimentosRecentes(limite);
      res.json({ success: true, data: atendimentos });
    } catch (error) {
      next(error);
    }
  },

  async getVendasRecentes(req: Request, res: Response, next: NextFunction) {
    try {
      const limite = req.query.limite ? parseInt(req.query.limite as string) : 5;
      const vendas = await dashboardService.getVendasRecentes(limite);
      res.json({ success: true, data: vendas });
    } catch (error) {
      next(error);
    }
  },

  async getEspeciesPets(req: Request, res: Response, next: NextFunction) {
    try {
      const especies = await dashboardService.getEspeciesPets();
      res.json({ success: true, data: especies });
    } catch (error) {
      next(error);
    }
  },

  async getVendasPorDia(req: Request, res: Response, next: NextFunction) {
    try {
      const dias = req.query.dias ? parseInt(req.query.dias as string) : 7;
      const vendas = await dashboardService.getVendasPorDia(dias);
      res.json({ success: true, data: vendas });
    } catch (error) {
      next(error);
    }
  },
};
