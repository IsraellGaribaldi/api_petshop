// src/db/prisma/prisma.ts

import { PrismaClient } from '../../generated/prisma/index.js';
import { Pool } from 'pg'; 
// Tenta importar o adaptador do Prisma. O nome do export pode mudar entre versões (PrismaPg, PgAdapter, etc.).
// Se o nome não for PostgreSQLAdapter, vamos renomeá-lo aqui.
import { PrismaPg as PostgreSQLAdapter } from '@prisma/adapter-pg'; 
// Se a linha acima falhar, troque para:
// import { PgAdapter as PostgreSQLAdapter } from '@prisma/adapter-pg'; 


// 1. Verificação de URL e Carregamento (Boa Prática)
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // Isso garante que você não tente iniciar o Prisma sem o DB
  throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

// 2. Criação do Pool do Driver (pg)
const pool = new Pool({ connectionString });

// 3. Criação do Adaptador Prisma (PostgreSQLAdapter)
// Note: Alguns adaptadores podem precisar do 'provider' ou outros configs aqui, 
// mas a forma mais simples é passar o pool.
const adapter = new PostgreSQLAdapter(pool);

// 4. Instanciação do Prisma Client com o Adapter
export const prisma = new PrismaClient({ adapter });
export default prisma;