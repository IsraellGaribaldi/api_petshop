import { z } from "zod";
import { createClienteSchema, updateClienteSchema } from "../schemas/clienteSchemas";
import { createPetSchema, updatePetSchema } from "../schemas/petSchemas";

export const validateCreateCliente = (data: unknown) => {
  try {
    const validatedData = createClienteSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = issue.path.join(".");
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateCliente = (data: unknown) => {
  try {
    const validatedData = updateClienteSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = issue.path.join(".");
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateCreatePet = (data: unknown) => {
  try {
    // 1. Tenta fazer o parse (validação) dos dados brutos
    const validatedData = createPetSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    // 2. Captura e formata erros Zod
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        // Concatena o caminho do campo (ex: "nome", "Atendimento.tipoAtendimento")
        const key = issue.path.join("."); 
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    // 3. Lança outros erros
    throw error;
  }
};


export const validateUpdatePet = (data: unknown) => {
  try {
    const validatedData = updatePetSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = issue.path.join(".");
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};