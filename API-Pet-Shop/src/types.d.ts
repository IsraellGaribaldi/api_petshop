import "express";
import { UsuarioToken } from "../middlewares/authMiddleware";

declare module "express" {
  export interface Request {
    usuario?: UsuarioToken;
  }
}
