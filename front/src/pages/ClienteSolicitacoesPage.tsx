import { useEffect, useState, useCallback, useMemo } from "react";
// Importa o tipo Solicitacao
import type { Solicitacao } from "../types/solicitacao"; 

// Assumir que temos um service adaptado para solicitações.
// getSolicitacoesByClienteId é uma nova função que busca apenas as do cliente logado.
import { getSolicitacoesByClienteId } from "../services/SolicitacaoServices"; // ASSUMIR O PATH CORRETO

import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

// Novo componente de Tabela sem botões de Ação complexos
import ClienteSolicitacoesTable from "../components/solicitacoes/ClienteSolicitacoesTable";
// Novo modal focado apenas na Criação
import CriarSolicitacaoModal from "../components/solicitacoes/CriarSolicitacaoModal";

import { useDebounce } from "../hooks/useDebounce";

// Tipagem do estado do Snackbar
type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

// **SIMULAÇÃO:** Em uma aplicação real, o ID viria de um Contexto de Autenticação.
const MOCK_CLIENTE_ID = 42; 

export const ClienteSolicitacoesPage = () => {
  const navigate = useNavigate();

  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);

  // O cliente pode abrir o modal de criação
  const [abrirModalCriar, setAbrirModalCriar] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  // Carregar solicitações do cliente logado
  useEffect(() => {
    const carregarSolicitacoes = async () => {
      try {
        // Busca apenas as solicitações do cliente logado
        const data = await getSolicitacoesByClienteId(MOCK_CLIENTE_ID); 
        setSolicitacoes(data);
      } catch (error) {
        console.error("Erro ao buscar solicitações:", error);
        setSnackbar({
          open: true,
          message: "Erro ao buscar suas solicitações.",
          severity: "error",
        });
      }
    };

    carregarSolicitacoes();
  }, []);

  // --- Funções de Ação ---
  
  // Após criar uma nova solicitação com sucesso
  const handleSucessoCriarSolicitacao = useCallback((nova: Solicitacao) => {
    // Adiciona a nova solicitação à lista na UI
    setSolicitacoes((prev) => [...prev, nova]);
    
    // Fecha o modal
    setAbrirModalCriar(false);
    
    setSnackbar({
      open: true,
      message: "Solicitação criada com sucesso! Acompanhe o status aqui.",
      severity: "success",
    });
  }, []);

  // --- Lógica de Busca ---
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const solicitacoesFiltradas = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return solicitacoes;

    const termo = debouncedSearchTerm.toLowerCase().trim();

    return solicitacoes.filter((s) => {
      // Filtra por descrição ou status (campos mais relevantes para o cliente)
      return (
        s.descricao.toLowerCase().includes(termo) ||
        s.status.toLowerCase().includes(termo)
        // Você pode adicionar s.id.toString() se quiser permitir busca por ID
      );
    });
  }, [solicitacoes, debouncedSearchTerm]);

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
          bgcolor:
            theme.palette.mode === "dark" ? "#242424" : "background.paper",
          color: theme.palette.text.primary,
          borderRadius: 2,
        })}
      >
        <IconButton
          aria-label="voltar"
          onClick={() => navigate("/")}
          size="small"
          sx={{ position: "absolute", left: 16, top: 16 }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Minhas Solicitações
        </Typography>

        {/* Campo de Busca (Adaptado para Solicitações) */}
        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Buscar por descrição ou status..."
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

          {debouncedSearchTerm && (
            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">
                Resultados encontrados:
              </Typography>
              <Chip
                label={solicitacoesFiltradas.length}
                size="small"
                color="primary"
                variant="outlined"
              />
              {solicitacoesFiltradas.length !== solicitacoes.length && (
                <Typography variant="body2" color="text.secondary">
                  de {solicitacoes.length} total
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Tabela de Solicitações do Cliente */}
        <ClienteSolicitacoesTable
          solicitacoes={solicitacoesFiltradas}
          // Sem props de edição/deleção, pois o cliente só acompanha
        />

        {/* Botão de Criação */}
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAbrirModalCriar(true)}
          >
            Nova Solicitação
          </Button>
        </Box>

        {/* Snackbar (Mantido) */}
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

      {/* Modal de Criação */}
      <CriarSolicitacaoModal
        open={abrirModalCriar}
        onClose={() => setAbrirModalCriar(false)}
        onSuccess={handleSucessoCriarSolicitacao}
        clienteId={MOCK_CLIENTE_ID} // Passa o ID do cliente para vincular a solicitação
      />
    </Box>
  );
};

export default ClienteSolicitacoesPage;