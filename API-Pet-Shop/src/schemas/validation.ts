// Importa a biblioteca Zod, que é usada para validação de esquemas.
import { z } from "zod";

export const createSolicitacaoSchema = z.object({
  descricao: z.string().min(5, "A descrição é muito curta."),
  status: z.string().nonempty("O status não pode ser vazio."),
});

// Schema de atualização: todos os campos são opcionais, permitindo atualizar apenas um.
export const updateSolicitacaoSchema = z.object({
  descricao: z.string().min(5, "A descrição é muito curta.").optional(),
  status: z.string().nonempty("O status não pode ser vazio.").optional(),
});


// Define o esquema para a criação de um novo pet.
export const createPetSchema = z.object({
  nome: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(100),
  especie: z.string().min(2).max(100),
  raça: z.string().max(100).optional(), // Raça é opcional.
  sexo: z.string().min(1),
  idcliente: z.number().int().positive("O ID do cliente deve ser um número positivo"),
  idade: z.number().int().positive("A idade deve ser um número positivo"),
});

// Define o esquema para a atualização de um pet.
// O método .partial() torna todos os campos do createPetSchema opcionais.
export const updatePetSchema = createPetSchema.partial();

// Define o esquema para a criação de um novo cliente.
export const createClienteSchema = z.object({
  nome: z.string().min(2).max(100),
  telefone: z.string().min(10).max(15),
  email: z.string().email("Formato de e-mail inválido"),
  endereço: z.string().min(5),
});

// Define o esquema para a atualização de um cliente, tornando todos os campos opcionais.
export const updateClienteSchema = createClienteSchema.partial();

// Define o esquema para a criação de um novo funcionário.
export const createFuncionarioSchema = z.object({
  nome: z.string().min(2).max(100),
  telefone: z.string().min(10).max(15),
  email: z.string().email(),
  endereço: z.string().min(5),
});

// Define o esquema para a atualização de um funcionário, tornando todos os campos opcionais.
export const updateFuncionarioSchema = createFuncionarioSchema.partial();

// Define o esquema para a criação de um novo atendimento.
export const createAtendimentoSchema = z.object({
  tipo: z.string().min(2),
  idpet: z.number().int().positive(),
  idfuncionario: z.number().int().positive(),
});

// Define o esquema para a atualização de um atendimento, tornando todos os campos opcionais.
export const updateAtendimentoSchema = createAtendimentoSchema.partial();

// Define o esquema para validar um parâmetro de ID na URL.
// Garante que o ID seja uma string contendo apenas dígitos e o transforma em um número.
export const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});

// Exporta os tipos inferidos dos esquemas Zod para serem usados no código TypeScript.
// Isso garante a tipagem segura dos dados em todo o aplicativo.
export type CreateSolicitacaoData = z.infer<typeof createSolicitacaoSchema>;
export type UpdateSolicitacaoData = z.infer<typeof updateSolicitacaoSchema>;
export type CreatePetData = z.infer<typeof createPetSchema>;
export type UpdatePetData = z.infer<typeof updatePetSchema>;
export type CreateClienteData = z.infer<typeof createClienteSchema>;
export type UpdateClienteData = z.infer<typeof updateClienteSchema>;
export type CreateFuncionarioData = z.infer<typeof createFuncionarioSchema>;
export type UpdateFuncionarioData = z.infer<typeof updateFuncionarioSchema>;
export type CreateAtendimentoData = z.infer<typeof createAtendimentoSchema>;
export type UpdateAtendimentoData = z.infer<typeof updateAtendimentoSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
