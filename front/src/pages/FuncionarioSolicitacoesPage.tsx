import { useEffect, useState, useCallback, useMemo } from "react";
// Importa o tipo Solicitacao
import type { Solicitacao } from "../types/solicitacao"; 
// Importa os serviços adaptados para Solicitações
import { getSolicitacoes, deleteSolicitacao } from "../services/SolicitacaoServices"; // ASSUMIR O PATH CORRETO

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

// Componentes da Solicitação
import SolicitacoesTable from "../components/solicitacoes/solicitacoesTable";
import AcaoSolicitacaoModal from "../components/solicitacoes/AcaoSolicitacaoModal"; // O novo modal de Ação

// Importação do useDebounce (mantido)
import { useDebounce } from "../hooks/useDebounce";

// Tipagem do estado do Snackbar (mantida)
type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

// Novo Tipo para controlar o Modal de Ação de Status
interface ModalActionState {
    solicitacao: Solicitacao;
    acaoStatus: "Concluída" | "Cancelada";
}

export const SolicitacoesPage = () => {
  const navigate = useNavigate();

  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });
  
  // Estado que controla qual solicitação e qual ação está ativa no modal
  const [modalAction, setModalAction] = useState<ModalActionState | null>(null);
  
  // Como não há modal de criação genérica, removemos 'abrirModalCriar'
  // const [abrirModalCriar, setAbrirModalCriar] = useState<boolean>(false); 

  // Carregar solicitações
  useEffect(() => {
    const carregarSolicitacoes = async () => {
      try {
        const data = await getSolicitacoes(); // ASSUMIR A FUNÇÃO DE SERVIÇO CORRETA
        setSolicitacoes(data);
      } catch (error) {
        console.error("Erro ao buscar solicitações:", error);
        setSnackbar({
          open: true,
          message: "Erro ao buscar solicitações.",
          severity: "error",
        });
      }
    };

    carregarSolicitacoes();
  }, []);

  // Deletar solicitação (mantido, pois deletar ainda é uma ação válida)
  const handleDelete = useCallback(async (id: number) => {
    setDeletingId(id);

    try {
      await deleteSolicitacao(id); // ASSUMIR A FUNÇÃO DE SERVIÇO CORRETA
      setSolicitacoes((prev) => prev.filter((s) => s.id !== id));
      setSnackbar({
        open: true,
        message: "Solicitação removida com sucesso.",
        severity: "success",
      });
    } catch (error) {
      console.error("Erro ao deletar solicitação:", error);
      setSnackbar({
        open: true,
        message: "Erro ao deletar solicitação.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  }, []);

  // --- Handlers para Abrir o Modal de Ação ---
  
  // Abrir modal para marcar como CONCLUÍDA
  const handleOpenConcluirModal = useCallback((solicitacao: Solicitacao) => {
    setModalAction({ solicitacao, acaoStatus: "Concluída" });
  }, []);

  // Abrir modal para marcar como CANCELADA
  const handleOpenCancelarModal = useCallback((solicitacao: Solicitacao) => {
    setModalAction({ solicitacao, acaoStatus: "Cancelada" });
  }, []);

  // Fechar modal de Ação
  const handleCloseActionModal = useCallback(() => {
    setModalAction(null);
  }, []);

  // Após salvar status atualizado (chamado pelo Modal de Ação)
  const handleSolicitacaoUpdated = useCallback((solicitacaoAtualizada: Solicitacao) => {
    setSolicitacoes((prev) =>
      prev.map((s) => (s.id === solicitacaoAtualizada.id ? solicitacaoAtualizada : s))
    );

    setSnackbar({
      open: true,
      message: `Status da Solicitação ID ${solicitacaoAtualizada.id} atualizado para ${solicitacaoAtualizada.status}.`,
      severity: "success",
    });
    handleCloseActionModal(); // Garante o fechamento após o sucesso
  }, [handleCloseActionModal]);

  // Busca com debounce (mantido)
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Filtro adaptado para Solicitações (descricao, status)
  const solicitacoesFiltradas = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return solicitacoes;

    const termo = debouncedSearchTerm.toLowerCase().trim();

    return solicitacoes.filter((s) => {
      // Filtra por descrição ou status
      return (
        s.descricao.toLowerCase().includes(termo) ||
        s.status.toLowerCase().includes(termo) 
        // Adicionar outros campos de filtro se necessário (ex: dataPrevista, etc.)
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
          Gerenciamento de Solicitações
        </Typography>

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

        {/* Tabela de Solicitações */}
        <SolicitacoesTable
          solicitacoes={solicitacoesFiltradas}
          deletingId={deletingId}
          onDelete={handleDelete}
          // Passa as novas funções de ação para a tabela
          onConcluir={handleOpenConcluirModal} 
          onCancelar={handleOpenCancelarModal}
        />

        {/* Removido o botão de "Novo Cliente", já que Solicitações devem ser criadas por outra rota/interface */}
        {/* <Box mt={3} display="flex" justifyContent="flex-end">
           <Button variant="contained" color="primary" onClick={() => setAbrirModalCriar(true)}>
             Nova Solicitação
           </Button>
        </Box> */}

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

      {/* Modal de Ação (Concluir/Cancelar) */}
      <AcaoSolicitacaoModal
        open={modalAction !== null}
        onClose={handleCloseActionModal}
        solicitacao={modalAction?.solicitacao || null}
        acaoStatus={modalAction?.acaoStatus || "Concluída"} // Padrão
        onSolicitacaoUpdated={handleSolicitacaoUpdated}
      />
      
      {/* Removido o Modal de Criação */}
    </Box>
  );
};

export default SolicitacoesPage;