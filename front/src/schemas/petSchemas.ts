import { z } from "zod";

export const basePetSchema = z.object({
  nome: z.string().min(1, "Nome do pet é obrigatório"),
  especie: z.string().min(1, "Espécie é obrigatória"),
  raça: z.string().optional(), 
  
  sexo: z.enum(["Macho", "Fêmea"], {
    // 🛠️ CORREÇÃO: Usar 'error' ou 'message' em z.enum()
    error: "Sexo inválido. Escolha 'Macho' ou 'Fêmea'.", 
  }),
  
  idade: z.number({ 
    // ✅ CORRETO: 'invalid_type_error' é usado aqui para ZodTypeBase<number>
    error: "Idade deve ser um número" 
  }).min(0, "Idade inválida"),
});

// --- Esquemas Extendidos ---
export const createPetSchema = basePetSchema.extend({
  idcliente: z.number({
    error: "ID do cliente deve ser um número"
  }),
  
  Atendimento: z.object({
    tipoAtendimento: z.string().min(1, "Tipo de Atendimento é obrigatório"),
    dataHora: z.string().min(1, "Data e hora do Atendimento é obrigatória"),
  }).optional(), 
});

export const updatePetSchema = createPetSchema.extend({
  id: z.number({
    error: "ID do Pet deve ser um número"
  }),
});

// Definições de Tipos:
export type CreatePetInput = z.infer<typeof createPetSchema>;
export type UpdatePetInput = z.infer<typeof updatePetSchema>;