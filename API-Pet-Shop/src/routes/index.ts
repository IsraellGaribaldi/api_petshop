import { Router } from "express";

import atendimentoRoutes from "./atendimentoRoutes.ts";
import clienteRoutes from "./clienteRoutes.ts";
import funcionarioRoutes from "./funcionarioRoutes.ts";
import loginRoutes from "./loginRoutes.ts";
import petRoutes from "./petRoutes.ts";

const router = Router();

// rotas
router.use("/atendimentos", atendimentoRoutes);
router.use("/clientes", clienteRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/login", loginRoutes);
router.use("/pets", petRoutes);

export default router;
