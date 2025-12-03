import express, { Express } from "express";
import cors from "cors";
import 'dotenv/config'; 
// Note: We assume these local files exist and are correctly exported with .ts extensions
import { setupSwagger } from "./swagger.ts"; 
import { prisma } from './db/prisma/prisma.ts'; 

// --- 1. Importação de Rotas (TEM QUE FICAR NO TOPO) ---
import atendimentoRoutes from "./routes/atendimentoRoutes.ts";
import clienteRoutes from "./routes/clienteRoutes.ts";
import funcionarioRoutes from "./routes/funcionarioRoutes.ts";
import petRoutes from "./routes/petRoutes.ts";
import loginRoutes from "./routes/loginRoutes.ts";
import agendamentoRoutes from "./routes/agendamentoRoutes.ts";

// --- 2. Inicialização do Servidor (APENAS UMA VEZ) ---
const app: Express = express(); 

// --- 3. Middlewares Globais ---
app.use(cors());
app.use(express.json());

// --- 4. Documentação Swagger ---
setupSwagger(app);

// --- 5. Rotas Principais ---
app.use("/atendimentos", atendimentoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/funcionarios", funcionarioRoutes);
app.use("/pets", petRoutes);
app.use("/auth", loginRoutes);
app.use("/agendamentos", agendamentoRoutes);

// --- 6. Rota Padrão ---
app.get("/", (req, res) => {
  res.send("API do PetShop está funcionando! Acesse /api-docs para ver a documentação.");
});

// --- 7. Inicia Servidor ---
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📘 Swagger disponível em http://localhost:${PORT}/api-docs`);
});