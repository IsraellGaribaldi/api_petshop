import { Router } from 'express';
import { validateBody } from '../middlewares/validate.js';
import { authMiddleware } from '../middlewares/auth.js';
import * as schemas from '../schemas/index.js';

import { clienteController } from '../controllers/clienteController.js';
import { petController } from '../controllers/petController.js';
import { produtoController } from '../controllers/produtoController.js';
import { servicoController } from '../controllers/servicoController.js';
import { atendimentoController } from '../controllers/atendimentoController.js';
import { vendaController } from '../controllers/vendaController.js';
import { funcionarioController } from '../controllers/funcionarioController.js';
import { authController } from '../controllers/authController.js';
import { dashboardController } from '../controllers/dashboardController.js';

const router = Router();

// Auth
router.post('/auth/login', validateBody(schemas.loginSchema), authController.login);
router.get('/auth/me', authMiddleware, authController.me);

// Dashboard
router.get('/dashboard/resumo', dashboardController.getResumo);
router.get('/dashboard/atendimentos-recentes', dashboardController.getAtendimentosRecentes);
router.get('/dashboard/vendas-recentes', dashboardController.getVendasRecentes);
router.get('/dashboard/especies', dashboardController.getEspeciesPets);
router.get('/dashboard/vendas-por-dia', dashboardController.getVendasPorDia);

// Clientes
router.get('/clientes', clienteController.findAll);
router.get('/clientes/:id', clienteController.findById);
router.post('/clientes', validateBody(schemas.clienteCreateSchema), clienteController.create);
router.put('/clientes/:id', validateBody(schemas.clienteUpdateSchema), clienteController.update);
router.delete('/clientes/:id', clienteController.delete);

// Pets
router.get('/pets', petController.findAll);
router.get('/pets/:id', petController.findById);
router.get('/clientes/:clienteId/pets', petController.findByCliente);
router.post('/pets', validateBody(schemas.petCreateSchema), petController.create);
router.put('/pets/:id', validateBody(schemas.petUpdateSchema), petController.update);
router.delete('/pets/:id', petController.delete);

// Produtos
router.get('/produtos', produtoController.findAll);
router.get('/produtos/categorias', produtoController.getCategorias);
router.get('/produtos/baixo-estoque', produtoController.getBaixoEstoque);
router.get('/produtos/:id', produtoController.findById);
router.post('/produtos', validateBody(schemas.produtoCreateSchema), produtoController.create);
router.put('/produtos/:id', validateBody(schemas.produtoUpdateSchema), produtoController.update);
router.delete('/produtos/:id', produtoController.delete);

// Serviços
router.get('/servicos', servicoController.findAll);
router.get('/servicos/ativos', servicoController.getAtivos);
router.get('/servicos/:id', servicoController.findById);
router.post('/servicos', validateBody(schemas.servicoCreateSchema), servicoController.create);
router.put('/servicos/:id', validateBody(schemas.servicoUpdateSchema), servicoController.update);
router.delete('/servicos/:id', servicoController.delete);

// Atendimentos
router.get('/atendimentos', atendimentoController.findAll);
router.get('/atendimentos/hoje', atendimentoController.getHoje);
router.get('/atendimentos/proximos', atendimentoController.getProximos);
router.get('/atendimentos/:id', atendimentoController.findById);
router.post('/atendimentos', validateBody(schemas.atendimentoCreateSchema), atendimentoController.create);
router.put('/atendimentos/:id', validateBody(schemas.atendimentoUpdateSchema), atendimentoController.update);
router.delete('/atendimentos/:id', atendimentoController.delete);

// Vendas
router.get('/vendas', vendaController.findAll);
router.get('/vendas/estatisticas', vendaController.getEstatisticas);
router.get('/vendas/:id', vendaController.findById);
router.post('/vendas', validateBody(schemas.vendaCreateSchema), vendaController.create);
router.put('/vendas/:id', validateBody(schemas.vendaUpdateSchema), vendaController.update);
router.delete('/vendas/:id', vendaController.delete);

// Funcionários (protegido)
router.get('/funcionarios', authMiddleware, funcionarioController.findAll);
router.get('/funcionarios/cargos', authMiddleware, funcionarioController.getCargos);
router.get('/funcionarios/:id', authMiddleware, funcionarioController.findById);
router.post('/funcionarios', authMiddleware, validateBody(schemas.funcionarioCreateSchema), funcionarioController.create);
router.put('/funcionarios/:id', authMiddleware, validateBody(schemas.funcionarioUpdateSchema), funcionarioController.update);
router.delete('/funcionarios/:id', authMiddleware, funcionarioController.delete);

export default router;
