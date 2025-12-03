import React, { useState } from "react";
import { 
    Link as RouterLink, 
    useNavigate // 1. NOVO: Importa o hook de navegação
} from "react-router-dom";
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
import { Login as LoginIcon } from "@mui/icons-material";
import { z } from "zod";
import axios from "axios";

const emailSchema = z.email();
const passwordSchema = z.string().min(4);

// Interface usada para enviar os dados no submit
interface LoginFormData {
  email: string;
  password: string;
}

// 2. NOVO: Interface atualizada para incluir 'token' e 'tipo'
interface LoginResponse {
  success: boolean;
  message: string;
  token: string; // O token JWT retornado pelo Backend
  user: {
    id: string;
    nome: string;
    email: string;
    tipo: "cliente" | "funcionario"; // O campo essencial para o redirecionamento
  };
}

const Login: React.FC = () => {
  const navigate = useNavigate(); // 3. Inicializa o hook de navegação
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ... (validateEmail e validatePassword - Omitidos para brevidade) ...

  const validateEmail = (email: string) => {
    if (!email.trim()) return { isValid: false, error: "" };
    const result = emailSchema.safeParse(email);
    return {
      isValid: result.success,
      error: result.success ? "" : "Email inválido",
    };
  };

  const validatePassword = (password: string) => {
    if (!password) return { isValid: false, error: "" };
    const result = passwordSchema.safeParse(password);
    return {
      isValid: result.success,
      error: result.success ? "" : "A senha deve ter pelo menos 4 caracteres",
    };
  };

  const isFormValid =
    validateEmail(formData.email).isValid &&
    validatePassword(formData.password).isValid;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError("");
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!isFormValid) {
      setError("Por favor, preencha todos os campos corretamente");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post<LoginResponse>(
        "https://api-petshop-5qe7.onrender.com/", // 
        formData
      );

      const data = response.data;
      
      // 4. Ações de Sucesso: Salvar Token e Redirecionar
      
      // Salvar o Token JWT para ser usado em requisições protegidas
      localStorage.setItem("authToken", data.token); 
      
      // Opcional: Salvar o tipo de usuário para futuras verificações no Frontend
      localStorage.setItem("userType", data.user.tipo);

      setSuccess(data.message || "Login realizado com sucesso!");

      // ** Lógica de Redirecionamento Condicional **
      if (data.user.tipo === "funcionario") {
          // Redireciona para a rota do funcionário (que deve renderizar HomeF)
          navigate('/home/funcionario'); 
      } else if (data.user.tipo === "cliente") {
          // Redireciona para a rota do cliente (que deve renderizar HomeC)
          navigate('/home/cliente');
      } else {
          // Fallback, caso o tipo não seja reconhecido
          navigate('/'); 
      }

    } catch (error) {
      // ... (Bloco de tratamento de erros permanece inalterado) ...
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          `Erro ${error.response?.status}: ${error.response?.statusText}`;
        setError(errorMessage);
      } else {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Erro de conexão. Verifique se o servidor está rodando.";
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ... (Restante do JSX permanece inalterado) ...
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Paper elevation={2} sx={{ p: 3, width: 320 }}>
        <Box textAlign="center" mb={2}>
          <LoginIcon sx={{ fontSize: 36, color: "primary.main", mb: 1 }} />
          <Typography variant="h6" component="h1" fontWeight={600} mb={1}>
            Bem-vindo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Faça login para acessar o sistema
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {/* Remover 'success' do JSX ou o redirecionamento será muito rápido para ver a mensagem */}

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            error={
              formData.email.length > 0 &&
              !validateEmail(formData.email).isValid
            }
            helperText={validateEmail(formData.email).error}
            disabled={isLoading}
          />

          <TextField
            label="Senha"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleInputChange}
            error={
              formData.password.length > 0 &&
              !validatePassword(formData.password).isValid
            }
            helperText={validatePassword(formData.password).error}
            disabled={isLoading}
          />

          <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <input type="checkbox" />
            <span style={{ marginLeft: 8 }}>Lembre de mim</span>
          </label>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              Não tem uma conta? Cadastre-se{" "}
              <MuiLink
                component={RouterLink}
                to="/register/cliente"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                aqui
              </MuiLink>
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid || isLoading}
            sx={{
              mt: 2,
              opacity: isFormValid && !isLoading ? 1 : 0.6,
              cursor:
                isFormValid && !isLoading ? "pointer" : "not-allowed",
            }}
          >
            {isLoading ? (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={20} color="inherit" />
                <span>Entrando...</span>
              </Box>
            ) : (
              "Entrar"
            )}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;