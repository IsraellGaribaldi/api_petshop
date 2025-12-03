import "express";
import { UsuarioToken } from "../middlewares/authMiddleware.ts";
declare module '@prisma/client' {
    export { PrismaClient } from '@prisma/client/runtime/library';
}

declare module "express" {
  export interface Request {
    usuario?: UsuarioToken;
  }
}
