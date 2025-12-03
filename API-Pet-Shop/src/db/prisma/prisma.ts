// src/db/prisma/prisma.ts (VERSÃO CORRIGIDA E SIMPLIFICADA)

// 1. Importação Padrão do Prisma Client
// Tente SEMPRE usar o caminho padrão primeiro, pois ele é o mais estável.
import { PrismaClient } from '@prisma/client'; 

// 2. Comentamos o Pool e o Adapter para ISOLAR o erro.
// import { Pool } from 'pg'; 
// import { PrismaPg as PostgreSQLAdapter } from '@prisma/adapter-pg'; 


// 3. Verificação de URL
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

// 4. Instanciação SIMPLES do Prisma (Sem Adapter)
// Usando a conexão padrão via DATABASE_URL
const prisma = new PrismaClient(); 

// Exportação
export { prisma };