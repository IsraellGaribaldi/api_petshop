import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { PersonAdd as PersonAddIcon } from "@mui/icons-material";
import axios from "axios";
import { z } from "zod";

const registerSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres"),
  tipo: z.enum(["funcionario", "cliente"], {
    message: "Selecione um tipo de usuário",
    }),
});

const Register: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState<"funcionario" | "cliente">("cliente");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = registerSchema.safeParse({ nome, email, password, tipo });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3333/register", {
        nome,
        email,
        password,
        tipo,
      });

      setSuccess(response.data.message || "Conta criada com sucesso!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Erro ao registrar. Tente novamente."
        );
      } else {
        setError("Erro inesperado. Verifique o servidor.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Paper elevation={2} sx={{ p: 3, width: 320 }}>
        <Box textAlign="center" mb={2}>
          <PersonAddIcon sx={{ fontSize: 36, color: "primary.main", mb: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Criar conta
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* SELEÇÃO DO TIPO DE USUÁRIO */}
          <Box mt={2}>
            <FormLabel component="legend">Tipo de usuário</FormLabel>
            <RadioGroup
              value={tipo}
              onChange={(e) =>
                setTipo(e.target.value as "funcionario" | "cliente")
              }
            >
              <FormControlLabel
                value="cliente"
                control={<Radio />}
                label="Cliente"
              />
              <FormControlLabel
                value="funcionario"
                control={<Radio />}
                label="Funcionário"
              />
            </RadioGroup>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={20} color="inherit" />
                <span>Registrando...</span>
              </Box>
            ) : (
              "Registrar"
            )}
          </Button>

          <Typography textAlign="center" variant="body2" mt={2}>
            Já possui uma conta?{" "}
            <MuiLink component={RouterLink} to="/" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Entrar</MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
