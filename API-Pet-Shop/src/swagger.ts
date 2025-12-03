// 📄 services/swagger.ts

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Importa o tipo correto da aplicação Express, que é 'Application'
import { Application } from "express"; 


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
// CORRIGIDO: O tipo da aplicação Express é 'Application', não 'Express'.
export const setupSwagger = (app: Application) => {
 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};