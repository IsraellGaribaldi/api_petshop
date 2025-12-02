import { z } from "zod";

// --- Esquema Base para os dados que o cliente fornece ---
export const baseSolicitacaoSchema = z.object({
  // A descrição é o campo principal para o cliente
  descricao: z.string().trim().min(
    10, 
    "A descrição é obrigatória e deve ter pelo menos 10 caracteres para ser detalhada."
  ).max(
    500, 
    "A descrição não pode exceder 500 caracteres."
  ),
});


// --- Esquema de Criação (Para o CriarSolicitacaoModal) ---
// Estende o baseSchema e adiciona a chave estrangeira (FK)
export const createSolicitacaoSchema = baseSolicitacaoSchema.extend({
  // O ID do cliente é obrigatório e deve ser um número inteiro positivo
  clienteId: z.number({
    error: "ID do cliente inválido."
  }).int().positive(),
  
  // Opcional: Se você quiser um campo de prioridade inicial na criação
  prioridade: z.enum(["Baixa", "Média", "Alta"]).optional(),
});


// --- Esquema de Atualização (Para o AcaoSolicitacaoModal do Funcionário) ---
// Extende o schema de criação e adiciona o ID da própria solicitação
export const updateSolicitacaoSchema = createSolicitacaoSchema.extend({
  id: z.number({
    error: "ID da solicitação inválido."
  }).int().positive(),
  
  // O funcionário pode mudar o status, então este campo deve ser validado
  status: z.enum(["Pendente", "Em Andamento", "Concluída", "Cancelada"], {
    error: "Status inválido."
  }),
});


// --- Definições de Tipos (Para uso nos componentes e serviços) ---
export type CreateSolicitacaoInput = z.infer<typeof createSolicitacaoSchema>;
export type UpdateSolicitacaoInput = z.infer<typeof updateSolicitacaoSchema>;

// --- Funções de Validação ---

/**
 * Valida os dados de criação de uma nova solicitação.
 * @param data Dados brutos do formulário.
 * @returns { success: boolean, data: CreateSolicitacaoInput | undefined, errors: Record<string, string> }
 */
export const validateCreateSolicitacao = (data: any) => {
  const result = createSolicitacaoSchema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data as CreateSolicitacaoInput, errors: {} };
  }
  
  // Mapeia os erros do Zod para o formato { campo: mensagem }
  const errorMap: Record<string, string> = {};
  result.error.issues.forEach(issue => {
    // Pega o nome do campo (path[0])
    const path = issue.path[0];
    if (typeof path === 'string') {
        errorMap[path] = issue.message;
    }
  });

  return { success: false, data: undefined, errors: errorMap };
};