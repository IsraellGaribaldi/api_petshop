import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface UsuarioToken extends JwtPayload {
  id: number;
  tipo: "cliente" | "funcionario";
}

export const autenticarToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const token = header.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err || !decoded) {
      return res.status(403).json({ error: "Token inválido." });
    }

    req.usuario = decoded as UsuarioToken;
    next();
  });
};

export const apenasFuncionarios = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.usuario?.tipo !== "funcionario") {
    return res.status(403).json({ error: "Apenas funcionários podem acessar." });
  }

  next();
};
