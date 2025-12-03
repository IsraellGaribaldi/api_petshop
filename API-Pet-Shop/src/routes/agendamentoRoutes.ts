import type { Request, Response, NextFunction} from "express";
import { Router } from "express";
import { prisma } from '../db/prisma/prisma.ts'; // 👈 Keep this import

// REMOVA: import { PrismaClient } from "@prisma/client"; // (Not needed here)
// REMOVA: const router = Router();
// REMOVA: const prisma = new PrismaClient(); // 👈 REMOVE this line (Redeclaration)

import { autenticarToken, apenasFuncionarios } from "../middlewares/authMiddleware.ts";

const router = Router(); // Keep the router declaration

// Tipagem opcional para request body
interface CriarAgendamentoBody {
 clienteId: number;
 petId: number;
 servico: string;
 data: string;
}

// Cliente e funcionário podem ver
router.get("/", autenticarToken, async (req: Request, res: Response) => {
   try {
  // ... rest of the code is fine
 const agendamentos = await prisma.agendamento.findMany({
 include: { cliente: true, pet: true }
 });

 res.json(agendamentos);
 } catch (err) {
 res.status(500).json({ error: "Erro ao buscar agendamentos." });
 }
});

// Criar (somente funcionários)
router.post(
 "/",
 autenticarToken,
 apenasFuncionarios,
 async (req: Request<{}, {}, CriarAgendamentoBody>, res: Response) => {
  try {
 const { clienteId, petId, servico, data } = req.body;

const novo = await prisma.agendamento.create({
 data: {
    clienteId,
   petId,
    servico,
    data: new Date(data)
   }
   });

   res.json(novo);
     } catch (err) {
     res.status(500).json({ error: "Erro ao criar agendamento." });
}
 }
);

// ... (Rest of the PUT and DELETE routes remain the same)

export default router;