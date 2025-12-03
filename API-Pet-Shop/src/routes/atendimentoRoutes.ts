
// Importa o Router do express, que permite a criação de rotas.
import { Router } from "express";
// Importa as funções do controller de atendimento, que são responsáveis pela lógica de negócio.
import {
  atendimento as createAtendimento,
  getAllAtendimento,
  getAtendimentoById,
  updateAtendimento,
  deleteAtendimento,
} from "../controller/atendimentosController.ts";
// Importa os middlewares de validação, que garantem que os dados da requisição estão no formato correto.
import { validateBody, validateParams } from "../middlewares/validation";
// Importa os schemas de validação do Zod, que definem a estrutura dos dados da requisição.
import {
  createAtendimentoSchema,
  updateAtendimentoSchema,
  idParamSchema,
} from "../schemas/validation";

// Cria uma nova instância do Router.
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Atendimentos
 *   description: Gerenciamento de Atendimentos
 */

/**
 * @swagger
 * /atendimentos:
 *   post:
 *     summary: Cria um novo atendimento
 *     tags: [Atendimentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo
 *               - idpet
 *               - idfuncionario
 *             properties:
 *               tipo:
 *                 type: string
 *               idpet:
 *                 type: integer
 *               idfuncionario:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Atendimento criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para criar um novo atendimento.
router.post("/", validateBody(createAtendimentoSchema), createAtendimento);

/**
 * @swagger
 * /atendimentos:
 *   get:
 *     summary: Retorna todos os atendimentos
 *     tags: [Atendimentos]
 *     responses:
 *       200:
 *         description: Lista de atendimentos
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar todos os atendimentos.
router.get("/", getAllAtendimento);

/**
 * @swagger
 * /atendimentos/{id}:
 *   get:
 *     summary: Retorna um atendimento pelo ID
 *     tags: [Atendimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Atendimento encontrado
 *       404:
 *         description: Atendimento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para buscar um atendimento pelo ID.
router.get("/:id", validateParams(idParamSchema), getAtendimentoById);

/**
 * @swagger
 * /atendimentos/{id}:
 *   put:
 *     summary: Atualiza um atendimento
 *     tags: [Atendimentos]
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
 *               tipo:
 *                 type: string
 *               idpet:
 *                 type: integer
 *               idfuncionario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Atendimento atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Atendimento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para atualizar um atendimento.
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(updateAtendimentoSchema),
  updateAtendimento
);

/**
 * @swagger
 * /atendimentos/{id}:
 *   delete:
 *     summary: Deleta um atendimento
 *     tags: [Atendimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Atendimento deletado com sucesso
 *       404:
 *         description: Atendimento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
// Define a rota para deletar um atendimento.
router.delete("/:id", validateParams(idParamSchema), deleteAtendimento);

// Exporta o router para que ele possa ser usado em outras partes do aplicativo.
export default router;
