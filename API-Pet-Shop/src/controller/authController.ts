import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService.js';

export const authController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  },

  async me(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, error: 'Não autenticado' });
      }
      const funcionario = await authService.me(req.user.id);
      res.json({ success: true, data: funcionario });
    } catch (error) {
      next(error);
    }
  },
};
