import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pet Shop API',
      version: '1.0.0',
      description: 'API completa para gerenciamento de Pet Shop',
      contact: {
        name: 'Suporte',
        email: 'suporte@petshop.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor de Desenvolvimento',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Cliente: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            telefone: { type: 'string' },
            email: { type: 'string' },
            endereco: { type: 'string' },
            cpf: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Pet: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            especie: { type: 'string' },
            raca: { type: 'string' },
            sexo: { type: 'string' },
            idade: { type: 'integer' },
            peso: { type: 'number' },
            observacoes: { type: 'string' },
            clienteId: { type: 'integer' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Produto: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            descricao: { type: 'string' },
            preco: { type: 'number' },
            estoque: { type: 'integer' },
            categoria: { type: 'string' },
            codigoBarra: { type: 'string' },
            ativo: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Servico: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            descricao: { type: 'string' },
            preco: { type: 'number' },
            duracao: { type: 'integer' },
            ativo: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Atendimento: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            dataHora: { type: 'string', format: 'date-time' },
            status: { type: 'string', enum: ['agendado', 'em_andamento', 'concluido', 'cancelado'] },
            observacoes: { type: 'string' },
            petId: { type: 'integer' },
            funcionarioId: { type: 'integer' },
            servicoId: { type: 'integer' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            error: { type: 'string' },
            details: { type: 'array', items: { type: 'object' } },
          },
        },
        PaginatedResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'array', items: {} },
            pagination: {
              type: 'object',
              properties: {
                page: { type: 'integer' },
                limit: { type: 'integer' },
                total: { type: 'integer' },
                totalPages: { type: 'integer' },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Pet Shop API Docs',
  }));
}
