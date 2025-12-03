// 📄 src/db/prisma/prisma.ts

// 1. CORRIGIDO: Voltamos para a importação nomeada.
// O TypeScript exige essa sintaxe para reconhecer PrismaClient como construtor.
import { PrismaClient } from '@prisma/client'; 

// 2. O restante do código permanece o mesmo, pois o TS agora reconhece o construtor:

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
 throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

// 4. Instanciação SIMPLES do Prisma 
const prisma = new PrismaClient(); 

// Exportação
export { prisma };