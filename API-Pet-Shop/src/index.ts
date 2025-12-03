import express from "express";
import cors from "cors";
import { setupSwagger } from "./swagger.ts";
import 'dotenv/config'; 
import { prisma } from './db/prisma/prisma.ts'; 

import atendimentoRoutes from "./routes/atendimentoRoutes.ts";
import clienteRoutes from "./routes/clienteRoutes.ts";
import funcionarioRoutes from "./routes/funcionarioRoutes.ts";
import petRoutes from "./routes/petRoutes.ts";
import loginRoutes from "./routes/loginRoutes.ts";
import agendamentoRoutes from "./routes/agendamentoRoutes.ts";

const app = express(); // ✔ TEM QUE VIR ANTES DE app.use()

// Middlewares
app.use(cors());
app.use(express.json());

// Documentação Swagger
setupSwagger(app);

// Rotas principais
app.use("/atendimentos", atendimentoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/funcionarios", funcionarioRoutes);
app.use("/pets", petRoutes);
app.use("/auth", loginRoutes);
app.use("/agendamentos", agendamentoRoutes);

// Rota padrão
app.get("/", (req, res) => {
  res.send("API do PetShop está funcionando! Acesse /api-docs para ver a documentação.");
});

// Inicia servidor
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📘 Swagger disponível em http://localhost:${PORT}/api-docs`);
});
