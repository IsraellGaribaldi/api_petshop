import { Router, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { autenticarToken, apenasFuncionarios } from "../middlewares/authMiddleware";

const router = Router();
const prisma = new PrismaClient();

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

// Editar (somente funcionários)
router.put(
  "/:id",
  autenticarToken,
  apenasFuncionarios,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { servico, data } = req.body;

      const atualizado = await prisma.agendamento.update({
        where: { id },
        data: {
          servico,
          data: new Date(data)
        }
      });

      res.json(atualizado);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar agendamento." });
    }
  }
);

// Deletar (somente funcionários)
router.delete(
  "/:id",
  autenticarToken,
  apenasFuncionarios,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      await prisma.agendamento.delete({ where: { id } });

      res.json({ message: "Agendamento deletado." });
    } catch (err) {
      res.status(500).json({ error: "Erro ao deletar agendamento." });
    }
  }
);

export default router;
