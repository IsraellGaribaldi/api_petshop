import { Request, Response } from 'express';
import { authService } from '../services/authService';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, senha, nome, telefone, endereco, userType } = req.body;

      if (!email || !senha || !nome || !telefone || !endereco || !userType) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      if (!['FUNCIONARIO', 'CLIENTE'].includes(userType)) {
        return res.status(400).json({ error: 'Tipo de usuário inválido' });
      }

      const user = await authService.register({ email, senha, nome, telefone, endereco, userType });
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      const result = await authService.login(email, senha);
      return res.json(result);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
};
export default authController;