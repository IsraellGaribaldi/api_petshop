/*
  Warnings:

  - You are about to drop the column `endereço` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `endereço` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `raça` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vendas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endereco` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `funcionarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vendas" DROP CONSTRAINT "Vendas_idcliente_fkey";

-- DropForeignKey
ALTER TABLE "Vendas" DROP CONSTRAINT "Vendas_idproduto_fkey";

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "endereço",
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "funcionarios" DROP COLUMN "endereço",
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "raça",
ADD COLUMN     "raca" TEXT;

-- DropTable
DROP TABLE "Produtos";

-- DropTable
DROP TABLE "Vendas";

-- CreateTable
CREATE TABLE "solicitacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "solicitacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "servico" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "solicitacao" ADD CONSTRAINT "solicitacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
