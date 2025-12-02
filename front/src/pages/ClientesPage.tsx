import { useEffect, useState, useCallback, useMemo } from "react";
import type { Cliente } from "../types/Cliente";
import { getClientes, deleteCliente } from "../services/ClienteServices";

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
import ClientesTable from "../components/clientes/ClientesTable";
import EditarClienteModal from "../components/clientes/EditarClienteModal";
import CriarClienteModal from "../components/clientes/CriarClientesModal";

import { useDebounce } from "../hooks/useDebounce";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

export const ClientesPage = () => {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  const [clienteEditando, setClienteEditando] = useState<Cliente | null>(null);
  const [abrirModalCriar, setAbrirModalCriar] = useState<boolean>(false);

  // Carregar clientes
  useEffect(() => {
    const carregarClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        setSnackbar({
          open: true,
          message: "Erro ao buscar clientes.",
          severity: "error",
        });
      }
    };

    carregarClientes();
  }, []);

  // Deletar cliente
  const handleDelete = useCallback(async (id: number) => {
    setDeletingId(id);

    try {
      await deleteCliente(id);
      setClientes((prev) => prev.filter((c) => c.id !== id));
      setSnackbar({
        open: true,
        message: "Cliente removido com sucesso.",
        severity: "success",
      });
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      setSnackbar({
        open: true,
        message: "Erro ao deletar cliente.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  }, []);

  // Abrir modal editar
  const handleOpenEditModal = useCallback((cliente: Cliente) => {
    setClienteEditando(cliente);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setClienteEditando(null);
  }, []);

  // Salvar cliente atualizado
  const handleSaveCliente = useCallback((clienteAtualizado: Cliente) => {
    setClientes((prev) =>
      prev.map((c) => (c.id === clienteAtualizado.id ? clienteAtualizado : c))
    );

    setSnackbar({
      open: true,
      message: "Cliente atualizado com sucesso.",
      severity: "success",
    });
  }, []);

  // Após criar um novo cliente
  const handleSucessoCriarCliente = useCallback((novo: Cliente) => {
    setClientes((prev) => [...prev, novo]);
    setSnackbar({
      open: true,
      message: "Cliente cadastrado com sucesso.",
      severity: "success",
    });
  }, []);

  // Busca com debounce
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const clientesFiltrados = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return clientes;

    const termo = debouncedSearchTerm.toLowerCase().trim();

    return clientes.filter((c) => {
      return (
        c.nome.toLowerCase().includes(termo) ||
        c.email.toLowerCase().includes(termo) ||
        c.telefone.includes(termo) ||
        c.endereco.toLowerCase().includes(termo) ||
        (c.pet?.nome.toLowerCase().includes(termo) ?? false)
      );
    });
  }, [clientes, debouncedSearchTerm]);

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
          Lista de Clientes
        </Typography>

        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Buscar por nome, email, telefone, endereço ou pet..."
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

          {debouncedSearchTerm && (
            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">
                Resultados encontrados:
              </Typography>

              <Chip
                label={clientesFiltrados.length}
                size="small"
                color="primary"
                variant="outlined"
              />

              {clientesFiltrados.length !== clientes.length && (
                <Typography variant="body2" color="text.secondary">
                  de {clientes.length} total
                </Typography>
              )}
            </Box>
          )}
        </Box>

        <ClientesTable
          clientes={clientesFiltrados}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAbrirModalCriar(true)}
          >
            Novo Cliente
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

      <EditarClienteModal
       open={!!clienteEditando}
       cliente={clienteEditando}
       onClose={handleCloseEditModal}
       onClienteUpdated={handleSaveCliente}   // ✔️ agora está correto

      />

      <CriarClienteModal
        open={abrirModalCriar}
        onClose={() => setAbrirModalCriar(false)}
        onSuccess={handleSucessoCriarCliente}
      />
    </Box>
  );
};

export default ClientesPage;
