import prismaPkg from '@prisma/client';

// Verificação opcional da variável de ambiente para falhar cedo em deploys sem DB
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("A variável de ambiente DATABASE_URL não está definida. Verifique seu arquivo .env.");
}

// Extract PrismaClient constructor robustly by checking common export shapes.
let PrismaClientCtor: any = undefined;
const pkgAny = prismaPkg as any;
if (typeof pkgAny.PrismaClient === 'function') {
  PrismaClientCtor = pkgAny.PrismaClient;
} else if (pkgAny.default && typeof pkgAny.default.PrismaClient === 'function') {
  PrismaClientCtor = pkgAny.default.PrismaClient;
} else if (typeof pkgAny.default === 'function') {
  // Some builds export the constructor as the default export
  PrismaClientCtor = pkgAny.default;
} else if (typeof pkgAny === 'function') {
  PrismaClientCtor = pkgAny;
} else {
  // Fallback: try to find any function property that looks like PrismaClient
  for (const k of Object.keys(pkgAny)) {
    if (typeof pkgAny[k] === 'function' && /PrismaClient/i.test(k)) {
      PrismaClientCtor = pkgAny[k];
      break;
    }
  }
}

if (!PrismaClientCtor) {
  throw new Error('Could not locate PrismaClient constructor in @prisma/client package exports.');
}

const prisma = new PrismaClientCtor();
export default prisma;
export { prisma };