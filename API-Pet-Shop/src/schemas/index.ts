import { z } from 'zod';

// ========== Cliente Schemas ==========
export const clienteCreateSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  telefone: z.string().min(10, 'Telefone inválido').max(20),
  email: z.string().email('Email inválido'),
  endereco: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres').max(200),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido (formato: 000.000.000-00)').optional(),
});

export const clienteUpdateSchema = clienteCreateSchema.partial();

// ========== Pet Schemas ==========
export const petCreateSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').max(50),
  especie: z.enum(['Cachorro', 'Gato', 'Pássaro', 'Coelho', 'Hamster', 'Outro'], {
    errorMap: () => ({ message: 'Espécie inválida' }),
  }),
  raca: z.string().max(50).optional(),
  sexo: z.enum(['Macho', 'Fêmea'], { errorMap: () => ({ message: 'Sexo deve ser Macho ou Fêmea' }) }),
  idade: z.number().int().min(0, 'Idade não pode ser negativa').max(50),
  peso: z.number().positive('Peso deve ser positivo').optional(),
  observacoes: z.string().max(500).optional(),
  clienteId: z.number().int().positive('ID do cliente inválido'),
});

export const petUpdateSchema = petCreateSchema.partial().omit({ clienteId: true });

// ========== Funcionário Schemas ==========
export const funcionarioCreateSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  telefone: z.string().min(10, 'Telefone inválido').max(20),
  email: z.string().email('Email inválido'),
  endereco: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres').max(200),
  cargo: z.string().min(2, 'Cargo é obrigatório').max(50),
  salario: z.number().positive('Salário deve ser positivo').optional(),
  senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  ativo: z.boolean().default(true),
});

export const funcionarioUpdateSchema = funcionarioCreateSchema.partial().omit({ senha: true });

// ========== Produto Schemas ==========
export const produtoCreateSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  descricao: z.string().max(500).optional(),
  preco: z.number().positive('Preço deve ser positivo'),
  estoque: z.number().int().min(0, 'Estoque não pode ser negativo').default(0),
  categoria: z.string().min(2, 'Categoria é obrigatória').max(50),
  codigoBarra: z.string().max(50).optional(),
  ativo: z.boolean().default(true),
});

export const produtoUpdateSchema = produtoCreateSchema.partial();

// ========== Serviço Schemas ==========
export const servicoCreateSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  descricao: z.string().max(500).optional(),
  preco: z.number().positive('Preço deve ser positivo'),
  duracao: z.number().int().positive('Duração deve ser positiva (em minutos)'),
  ativo: z.boolean().default(true),
});

export const servicoUpdateSchema = servicoCreateSchema.partial();

// ========== Atendimento Schemas ==========
export const atendimentoCreateSchema = z.object({
  dataHora: z.string().datetime({ message: 'Data/hora inválida' }).or(z.date()),
  status: z.enum(['agendado', 'em_andamento', 'concluido', 'cancelado']).default('agendado'),
  observacoes: z.string().max(500).optional(),
  petId: z.number().int().positive('ID do pet inválido'),
  funcionarioId: z.number().int().positive('ID do funcionário inválido'),
  servicoId: z.number().int().positive('ID do serviço inválido'),
});

export const atendimentoUpdateSchema = z.object({
  dataHora: z.string().datetime().or(z.date()).optional(),
  status: z.enum(['agendado', 'em_andamento', 'concluido', 'cancelado']).optional(),
  observacoes: z.string().max(500).optional(),
  funcionarioId: z.number().int().positive().optional(),
  servicoId: z.number().int().positive().optional(),
});

// ========== Venda Schemas ==========
export const itemVendaSchema = z.object({
  produtoId: z.number().int().positive('ID do produto inválido'),
  quantidade: z.number().int().positive('Quantidade deve ser positiva'),
});

export const vendaCreateSchema = z.object({
  clienteId: z.number().int().positive('ID do cliente inválido'),
  formaPagto: z.enum(['dinheiro', 'cartao_credito', 'cartao_debito', 'pix'], {
    errorMap: () => ({ message: 'Forma de pagamento inválida' }),
  }),
  itens: z.array(itemVendaSchema).min(1, 'Venda deve ter pelo menos um item'),
});

export const vendaUpdateSchema = z.object({
  status: z.enum(['pendente', 'pago', 'cancelado']).optional(),
  formaPagto: z.enum(['dinheiro', 'cartao_credito', 'cartao_debito', 'pix']).optional(),
});

// ========== Auth Schemas ==========
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string().min(1, 'Senha é obrigatória'),
});

// ========== Query Schemas ==========
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
  orderBy: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('asc'),
});

// Types
export type ClienteCreate = z.infer<typeof clienteCreateSchema>;
export type ClienteUpdate = z.infer<typeof clienteUpdateSchema>;
export type PetCreate = z.infer<typeof petCreateSchema>;
export type PetUpdate = z.infer<typeof petUpdateSchema>;
export type FuncionarioCreate = z.infer<typeof funcionarioCreateSchema>;
export type FuncionarioUpdate = z.infer<typeof funcionarioUpdateSchema>;
export type ProdutoCreate = z.infer<typeof produtoCreateSchema>;
export type ProdutoUpdate = z.infer<typeof produtoUpdateSchema>;
export type ServicoCreate = z.infer<typeof servicoCreateSchema>;
export type ServicoUpdate = z.infer<typeof servicoUpdateSchema>;
export type AtendimentoCreate = z.infer<typeof atendimentoCreateSchema>;
export type AtendimentoUpdate = z.infer<typeof atendimentoUpdateSchema>;
export type VendaCreate = z.infer<typeof vendaCreateSchema>;
export type VendaUpdate = z.infer<typeof vendaUpdateSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type PaginationQuery = z.infer<typeof paginationSchema>;
