// Importa o Router do express, que permite a criação de rotas.
import { Router } from "express";
// Importa as funções do controller de cliente, que são responsáveis pela lógica de negócio.
import {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
} from "../controller/clienteController.ts";
// Importa os middlewares de validação, que garantem que os dados da requisição estão no formato correto.
import { validateBody, validateParams } from "../middlewares/validation.ts";
// Importa os schemas de validação do Zod, que definem a estrutura dos dados da requisição.
import {
  createClienteSchema,
  updateClienteSchema,
  idParamSchema,
} from "../schemas/validation.ts";

// Cria uma nova instância do Router.
const router = Router();

/**
 * @swagger
 * tags:
 *   name: clientes
 *   description: Gerenciamento de Clientes
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - telefone
 *               - endereço
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereço:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para criar um novo cliente.
router.post("/", validateBody(createClienteSchema), createCliente);

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     tags: [clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar todos os clientes.
router.get("/", getAllClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     tags: [clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar um cliente pelo ID.
router.get("/:id", validateParams(idParamSchema), getClienteById);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [clientes]
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
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereço:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para atualizar um cliente.
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(updateClienteSchema),
  updateCliente
);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Deleta um cliente
 *     tags: [clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente deletado com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para deletar um cliente.
router.delete("/:id", validateParams(idParamSchema), deleteCliente);

// Exporta o router para que ele possa ser usado em outras partes do aplicativo.
export default router;