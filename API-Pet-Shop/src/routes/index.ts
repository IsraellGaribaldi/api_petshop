import { Router } from "express";

import atendimentoRoutes from "./atendimentoRoutes";
import clienteRoutes from "./clienteRoutes";
import funcionarioRoutes from "./funcionarioRoutes";
import loginRoutes from "./loginRoutes";
import petRoutes from "./petRoutes";

const router = Router();

// rotas
router.use("/atendimentos", atendimentoRoutes);
router.use("/clientes", clienteRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/login", loginRoutes);
router.use("/pets", petRoutes);

export default router;
