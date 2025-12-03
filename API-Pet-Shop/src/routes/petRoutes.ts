// Importa o Router do express, que permite a criação de rotas.
import { Router } from "express";
// Importa as funções do controller de pet, que são responsáveis pela lógica de negócio.
import {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
} from "../controller/petController.ts";
// Importa os middlewares de validação, que garantem que os dados da requisição estão no formato correto.
import { validateBody, validateParams } from "../middlewares/validation.ts";
// Importa os schemas de validação do Zod, que definem a estrutura dos dados da requisição.
import {
  createPetSchema,
  updatePetSchema,
  idParamSchema,
} from "../schemas/validation.ts";

// Cria uma nova instância do Router.
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gerenciamento de Pets
 */

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Cria um novo pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idcliente
 *               - nome
 *               - especie
 *               - raca
 *               - sexo
 *               - idade
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *               raca:
 *                 type: string
 *               sexo:
 *                 type: string
 *               idcliente:
 *                 type: number
 *               idade:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pet criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para criar um novo pet.
router.post("/", validateBody(createPetSchema), createPet);

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Retorna todos os pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de pets
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar todos os pets.
router.get("/", getAllPets);

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     summary: Retorna um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pet encontrado
 *       404:
 *         description: Pet não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar um pet pelo ID.
router.get("/:id", validateParams(idParamSchema), getPetById);

/**
 * @swagger
 * /pets/{id}:
 *   put:
 *     summary: Atualiza um pet
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *               raca:
 *                 type: string
 *               sexo:
 *                 type: string
 *               idcliente:
 *                 type: number
 *               idade:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pet atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Pet não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para atualizar um pet.
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(updatePetSchema),
  updatePet
);

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Deleta um pet
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pet deletado com sucesso
 *       404:
 *         description: Pet não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para deletar um pet.
router.delete("/:id", validateParams(idParamSchema), deletePet);

// Exporta o router para que ele possa ser usado em outras partes do aplicativo.
export default router;