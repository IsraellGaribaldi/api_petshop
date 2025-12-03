// Importa o Router do express.
import { Router } from "express";
// Importa as funções do controller de solicitações.
import {
  createSolicitacao,
  getAllSolicitacoes,
  getSolicitacaoById,
  updateSolicitacao,
  deleteSolicitacao,
} from "../controller/solicitacaoController.ts"; // Ajustado para o controller de solicitações
// Importa os middlewares de validação.
import { validateBody, validateParams } from "../middlewares/validation.ts";
// Importa os schemas de validação do Zod para solicitação.
import {
  createSolicitacaoSchema, // Assumindo que você terá um schema de criação
  updateSolicitacaoSchema, // Assumindo que você terá um schema de atualização
  idParamSchema, // Reutilizando o schema de validação de ID
} from "../schemas/validation.ts"; // Ajuste o path conforme necessário

// Cria uma nova instância do Router.
const router = Router();

/**
 * @swagger
 * tags:
 * name: Solicitacoes
 * description: Gerenciamento de Solicitações
 */

// --- Rotas CRUD ---

/**
 * @swagger
 * /solicitacoes:
 * post:
 * summary: Cria uma nova solicitação
 * tags: [Solicitacoes]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - descricao
 * - status
 * properties:
 * descricao:
 * type: string
 * description: Descrição detalhada da solicitação.
 * status:
 * type: string
 * description: Status atual da solicitação (Ex: 'Pendente', 'Em Andamento', 'Concluída').
 * responses:
 * 201:
 * description: Solicitação criada com sucesso
 * 400:
 * description: Erro na requisição (validação)
 * 500:
 * description: Erro interno do servidor
 */
// Rota para criar uma nova solicitação.
router.post("/", validateBody(createSolicitacaoSchema), createSolicitacao);

/**
 * @swagger
 * /solicitacoes:
 * get:
 * summary: Retorna todas as solicitações
 * tags: [Solicitacoes]
 * responses:
 * 200:
 * description: Lista de solicitações
 * 500:
 * description: Erro interno do servidor
 */
// Rota para buscar todas as solicitações.
router.get("/", getAllSolicitacoes);

/**
 * @swagger
 * /solicitacoes/{id}:
 * get:
 * summary: Retorna uma solicitação pelo ID
 * tags: [Solicitacoes]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Solicitação encontrada
 * 404:
 * description: Solicitação não encontrada
 * 500:
 * description: Erro interno do servidor
 */
// Rota para buscar uma solicitação pelo ID.
router.get("/:id", validateParams(idParamSchema), getSolicitacaoById);

/**
 * @swagger
 * /solicitacoes/{id}:
 * put:
 * summary: Atualiza uma solicitação
 * tags: [Solicitacoes]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * descricao:
 * type: string
 * status:
 * type: string
 * responses:
 * 200:
 * description: Solicitação atualizada com sucesso
 * 400:
 * description: Erro na requisição (validação)
 * 404:
 * description: Solicitação não encontrada
 * 500:
 * description: Erro interno do servidor
 */
// Rota para atualizar uma solicitação.
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(updateSolicitacaoSchema),
  updateSolicitacao
);

/**
 * @swagger
 * /solicitacoes/{id}:
 * delete:
 * summary: Deleta uma solicitação
 * tags: [Solicitacoes]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 204:
 * description: Solicitação deletada com sucesso
 * 404:
 * description: Solicitação não encontrada
 * 500:
 * description: Erro interno do servidor
 */
// Rota para deletar uma solicitação.
router.delete("/:id", validateParams(idParamSchema), deleteSolicitacao);

// Exporta o router.
export default router;