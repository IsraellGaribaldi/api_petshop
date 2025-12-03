// 📄 src/db/prisma/prisma.ts (Versão Corrigida Final e à Prova de Falhas CJS/ESM)

// 1. SOLUÇÃO FINAL: Importa o módulo inteiro como um namespace.
// Isso evita o 'SyntaxError: The requested module ... does not provide an export named...'
import * as PrismaModule from '@prisma/client'; 

// 2. Acessa o construtor PrismaClient.
// O construtor PrismaClient pode estar em 'PrismaModule.PrismaClient' ou, 
// em alguns ambientes ES Modules/CJS híbridos, em '(PrismaModule as any).default.PrismaClient'.
// Usamos a forma mais robusta que o TS e o Node suportam.
const PrismaClient = PrismaModule.PrismaClient; // Acessamos a exportação nomeada

// 3. Verificação de URL
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
 throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

// 4. Instanciação SIMPLES do Prisma 
const prisma = new PrismaClient(); // Usa o construtor do namespace

// Exportação
export { prisma };