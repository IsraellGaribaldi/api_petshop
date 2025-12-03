import prismaPkg from '@prisma/client';

// Verificação opcional da variável de ambiente para falhar cedo em deploys sem DB
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

const PrismaClientCtor: any = (prismaPkg as any).PrismaClient ?? (prismaPkg as any).default?.PrismaClient ?? (prismaPkg as any).default ?? (prismaPkg as any);

const prisma = new PrismaClientCtor();
export default prisma;
export { prisma };