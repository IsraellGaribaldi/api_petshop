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
} from "@mui/material";
import { Badge as BadgeIcon } from "@mui/icons-material";
import { z } from "zod";

import { FuncionarioService } from "../services/FuncionariosServices";

const registerSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(4, "A senha deve ter pelo menos 4 caracteres"),
  telefone: z.string().min(8, "Telefone inválido"),
  endereco: z.string().min(4, "Endereço obrigatório"),
});

const RegisterFuncionario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = registerSchema.safeParse({
      nome,
      email,
      senha,
      telefone,
      endereco,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);

    try {
      await FuncionarioService.create({
        nome,
        telefone,
        email,
        senha,
        endereco,
      });

      setSuccess("Funcionário registrado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setEndereco("");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Erro ao registrar. Tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 360 }}>
        <Box textAlign="center" mb={3}>
          <BadgeIcon sx={{ fontSize: 48, color: "secondary.main", mb: 1 }} />
          <Typography variant="h5" fontWeight={600}>
            Registro de Funcionário
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Telefone"
            fullWidth
            margin="normal"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />

          <TextField
            label="Endereço"
            fullWidth
            margin="normal"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />

          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={20} color="inherit" />
                <span>Registrando...</span>
              </Box>
            ) : (
              "Criar Conta"
            )}
          </Button>

          <Typography textAlign="center" variant="body2" mt={3}>
            Já possui uma conta?{" "}
            <MuiLink component={RouterLink} to="/" sx={{ textDecoration: "none", fontWeight: "bold" }}>
              Entrar
            </MuiLink>
          </Typography>

          <Typography textAlign="center" variant="body2" mt={1}>
            É cliente?{" "}
            <MuiLink
              component={RouterLink}
              to="/register/cliente"
              sx={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Registrar como cliente
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterFuncionario;
