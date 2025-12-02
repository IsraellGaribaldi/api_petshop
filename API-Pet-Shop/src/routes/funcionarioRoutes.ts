// Importa o Router do express, que permite a criação de rotas.
import { Router } from "express";
// Importa as funções do controller de funcionário, que são responsáveis pela lógica de negócio.
import {
  createFuncionario,
  getAllFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario,
} from "../controller/funcionarioController";
// Importa os middlewares de validação, que garantem que os dados da requisição estão no formato correto.
import { validateBody, validateParams } from "../middlewares/validation";
// Importa os schemas de validação do Zod, que definem a estrutura dos dados da requisição.
import {
  createFuncionarioSchema,
  updateFuncionarioSchema,
  idParamSchema,
} from "../schemas/validation";

// Cria uma nova instância do Router.
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Funcionarios
 *   description: Gerenciamento de Funcionários
 */

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cria um novo funcionário
 *     tags: [Funcionarios]
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
 *               - endereco
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
 *         description: Funcionário criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para criar um novo funcionário.
router.post("/", validateBody(createFuncionarioSchema), createFuncionario);

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Retorna todos os funcionários
 *     tags: [Funcionarios]
 *     responses:
 *       200:
 *         description: Lista de funcionários
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar todos os funcionários.
router.get("/", getAllFuncionarios);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Retorna um funcionário pelo ID
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar um funcionário pelo ID.
router.get("/:id", validateParams(idParamSchema), getFuncionarioById);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza um funcionário
 *     tags: [Funcionarios]
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
 *         description: Funcionário atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para atualizar um funcionário.
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(updateFuncionarioSchema),
  updateFuncionario
);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Deleta um funcionário
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Funcionário deletado com sucesso
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para deletar um funcionário.
router.delete("/:id", validateParams(idParamSchema), deleteFuncionario);

// Exporta o router para que ele possa ser usado em outras partes do aplicativo.
export default router;
