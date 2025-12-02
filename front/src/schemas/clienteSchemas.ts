import { z } from "zod";

export const petSchema = z.object({
  nome: z.string().min(1, "Nome do pet é obrigatório"),
  especie: z.string().min(1, "Espécie é obrigatória"),
  raça: z.string().min(1, "Raça é obrigatória"),
  idade: z.number().min(0, "Idade inválida"),
});

export const createClienteSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  telefone: z.string().min(8, "Telefone inválido"),
  endereco: z.string().min(3, "Endereço é obrigatório"),
  email: z.string().email("Email inválido"),
  pet: petSchema.optional(),
});

export const updateClienteSchema = createClienteSchema.extend({
  id: z.number(),
});

export type CreateClienteInput = z.infer<typeof createClienteSchema>;
export type UpdateClienteInput = z.infer<typeof updateClienteSchema>;

