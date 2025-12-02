import { Router } from "express";
import { z } from "zod";

// Esquema de validação com Zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

const router = Router();

router.post("/login", async (req, res) => {
  // Validação dos dados
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Dados inválidos",
      errors: result.error.issues,
    });
  }

  const { email, password } = result.data;

  // Exemplo de autenticação (substitua pela consulta ao banco)
  if (email === "admin@email.com" && password === "1234") {
    return res.json({
      success: true,
      message: "Login realizado com sucesso!",
      user: { id: "1", nome: "Admin", email },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Email ou senha inválidos",
  });
});

export default router;