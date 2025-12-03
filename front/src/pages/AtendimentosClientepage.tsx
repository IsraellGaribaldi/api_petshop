// 📄 pages/AtendimentosClientePage.tsx

import { useEffect, useState, useMemo } from "react";
import type { Atendimento } from "../types/Atendimento";
// ✅ NECESSÁRIO: Criar/modificar esta função para aceitar um ID de filtro
import { getAtendimentos } from "../services/AtendimentoServices"; 

import {
  Box,
  Paper,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import AtendimentosTable from "../components/atendimentos/AtendimentosTableCliente"; 
import { useDebounce } from "../hooks/useDebounce";
import { useAuth } from "../context/AuthContext"; // 

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

const AtendimentosClientePage = () => {
  const navigate = useNavigate();
  // 🔑 Obtém a ID do cliente logado
  const { userId, userRole } = useAuth(); 

  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  const debouncedTermo = useDebounce(searchTerm, 300);


  useEffect(() => {
    // ⚠️ Proteção: só carrega se o userId for válido e o role for 'cliente'
    if (!userId || userRole !== 'cliente') {
        navigate('/'); // Redireciona se não estiver logado como cliente
        return;
    }
    
    const carregar = async () => {
      try {
       
        const data = await getAtendimentos(userId); 
        setAtendimentos(data);
      } catch (err) {
        console.error(err);
        setSnackbar({
          open: true,
          message: "Erro ao carregar seus atendimentos.",
          severity: "error",
        });
      }
    };

    carregar();
  }, [userId, userRole, navigate]); // Dependências do useAuth

  const atendimentosFiltrados = useMemo(() => {
    if (!debouncedTermo) return atendimentos;

    const termo = debouncedTermo.toLowerCase().trim();

    return atendimentos.filter((a) => {
      return (
        a.tipoAtendimento.toLowerCase().includes(termo) ||
        a.dataHora.includes(termo) ||
        // Remove filtro por nome do funcionário/pet se não for relevante na tabela simples
        a.pet?.nome?.toLowerCase().includes(termo) 
      );
    });
  }, [atendimentos, debouncedTermo]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
      p={3}
    >
      <Paper
        elevation={3}
        sx={(theme) => ({
          width: "100%",
          maxWidth: 1000,
          p: 3,
          position: "relative",
          bgcolor: theme.palette.mode === "dark" ? "#242424" : "background.paper",
          color: theme.palette.text.primary,
          borderRadius: 2,
        })}
      >
        <IconButton
          aria-label="voltar"
          onClick={() => navigate("/cliente/dashboard")} // Volta para o painel do cliente
          size="small"
          sx={{ position: "absolute", top: 16, left: 16 }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Meus Atendimentos
        </Typography>

        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Buscar por tipo ou data..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
          />

          {debouncedTermo && (
            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">
                Resultados encontrados:
              </Typography>
              <Chip
                label={atendimentosFiltrados.length}
                size="small"
                color="primary"
                variant="outlined"
              />
              {atendimentosFiltrados.length !== atendimentos.length && (
                <Typography variant="body2" color="text.secondary">
                  de {atendimentos.length} total
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* ✅ Usando a nova Tabela de visualização */}
        <AtendimentosTable
          atendimentos={atendimentosFiltrados}
          // Sem botões de CRUD
        />

        {/* ❌ REMOVIDO: Botão "Novo Atendimento" e Modals de Edição/Criação */}

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default AtendimentosClientePage;
