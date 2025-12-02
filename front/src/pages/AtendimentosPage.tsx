import { useEffect, useState, useCallback, useMemo } from "react";
import type { Atendimento } from "../types/Atendimento";
import { getAtendimentos, deleteAtendimento } from "../services/AtendimentoServices";

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

import AtendimentosTable from "../components/atendimentos/AtendimentosTable";
import EditarAtendimentoModal from "../components/atendimentos/EditarAtendimentoModal.tsx";
import CriarAtendimentoModal from "../components/atendimentos/CriarAtendimentoModal";

import { useDebounce } from "../hooks/useDebounce";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

const AtendimentosPage = () => {
  const navigate = useNavigate();

  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  const [atendimentoEditando, setAtendimentoEditando] = useState<Atendimento | null>(null);
  const [abrirModalCriar, setAbrirModalCriar] = useState<boolean>(false);

  const [pets, setPets] = useState<{ id: number; nome: string }[]>([]);
  const [funcionarios, setFuncionarios] = useState<{ idfuncionario: number; nome: string }[]>([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await getAtendimentos();
        setAtendimentos(data);
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Erro ao carregar atendimentos.",
          severity: "error",
        });
      }
    };

    carregar();
  }, []);

  useEffect(() => {
    const carregarListas = async () => {
      try {
        // TODO: substituir por seus serviços reais de pets e funcionários
        setPets([]);
        setFuncionarios([]);
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Erro ao carregar pets ou funcionários.",
          severity: "error",
        });
      }
    };

    carregarListas();
  }, []);

  const handleDelete = useCallback(async (id: number) => {
    setDeletingId(id);

    try {
      await deleteAtendimento(id);
      setAtendimentos((prev) => prev.filter((a) => a.id !== id));

      setSnackbar({
        open: true,
        message: "Atendimento removido.",
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Erro ao deletar atendimento.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  }, []);

  const handleOpenEditModal = useCallback((a: Atendimento) => {
    setAtendimentoEditando(a);
  }, []);

  const handleCloseEditModal = () => setAtendimentoEditando(null);

  const handleSave = useCallback((atualizado: Atendimento) => {
    setAtendimentos((prev) =>
      prev.map((a) => (a.id === atualizado.id ? atualizado : a))
    );

    setSnackbar({
      open: true,
      message: "Atendimento atualizado.",
      severity: "success",
    });
  }, []);

  const handleSucessoCriar = useCallback((novo: Atendimento) => {
    setAtendimentos((prev) => [...prev, novo]);

    setSnackbar({
      open: true,
      message: "Atendimento criado com sucesso.",
      severity: "success",
    });
  }, []);

  const debouncedTermo = useDebounce(searchTerm, 300);

  const atendimentosFiltrados = useMemo(() => {
    if (!debouncedTermo) return atendimentos;

    const termo = debouncedTermo.toLowerCase().trim();

    return atendimentos.filter((a) => {
      return (
        a.tipoAtendimento.toLowerCase().includes(termo) ||
        a.dataHora.includes(termo) ||
        a.funcionario?.nome?.toLowerCase().includes(termo) ||
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
          onClick={() => navigate("/")}
          size="small"
          sx={{ position: "absolute", top: 16, left: 16 }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Atendimentos
        </Typography>

        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Buscar por tipo, data, cliente ou pet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
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

        <AtendimentosTable
          atendimentos={atendimentosFiltrados}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={() => setAbrirModalCriar(true)}>
            Novo Atendimento
          </Button>
        </Box>

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

      <EditarAtendimentoModal
        open={!!atendimentoEditando}
        atendimento={atendimentoEditando}
        onClose={handleCloseEditModal}
        onAtendimentoUpdated={handleSave}
      />

      <CriarAtendimentoModal
        open={abrirModalCriar}
        onClose={() => setAbrirModalCriar(false)}
        onSuccess={handleSucessoCriar}
        pets={pets}
        funcionarios={funcionarios}
      />
    </Box>
  );
};

export default AtendimentosPage;
