
// Importa o PrismaClient, que é a classe principal do Prisma para interagir com o banco de dados.
// O PrismaClient é gerado automaticamente com base no seu schema.prisma.
import { PrismaClient } from "../../generated/prisma";

// Cria uma nova instância do PrismaClient.
// Esta instância será usada para fazer todas as consultas ao banco de dados.
const prisma = new PrismaClient();

// Exporta a instância do prisma para que ela possa ser usada em outras partes do aplicativo.
export default prisma;
