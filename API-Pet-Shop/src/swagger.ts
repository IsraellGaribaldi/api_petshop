// 📄 services/swagger.ts (Versão Corrigida Final)

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// REMOVIDO: import express from "express"; (Não precisamos do valor aqui)

// CORREÇÃO: Usamos 'type' para garantir que esta importação seja ignorada pelo Node.js runtime,
// resolvendo o SyntaxError.
import { type Application } from "express"; 


const options = {
 definition: {
  openapi: "3.0.0",
  info: {
  title: "API de Petshop",
  version: "1.0.0",
 description: "API para gerenciar um petshop, incluindo clientes, pets, funcionários e atendimentos",
 },
   servers: [
 {
    url: "http://localhost:3333",
 },
  ],
 },

 // IMPORTANTE:
// Quando TypeScript compila, os arquivos viram .js dentro de src/
 // Então o swagger deve ler .js
 apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

/**
 * Configura o Swagger na aplicação
 */
// O objeto 'app' é tipado como Application
export const setupSwagger = (app: Application) => {
 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};