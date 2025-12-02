import React, { useState, useEffect } from "react";
import { FuncionarioService } from "../../services/FuncionariosServices";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import type { Funcionario } from "../../services/FuncionariosServices";

interface EditarFuncionarioModalProps {
  open: boolean;
  onClose: () => void;
  funcionario: Funcionario | null;
  onFuncionarioUpdated: (updated: Funcionario) => void;
}

export const EditarFuncionarioModal = ({
  open,
  onClose,
  funcionario,
  onFuncionarioUpdated,
}: EditarFuncionarioModalProps) => {

  const [formData, setFormData] = useState<Funcionario>({
    id: 0,
    nome: "",
    cargo: "",
    salario: 0,
    telefone: "",
    email: "",
    data_admissao: "",
  });

  const [salvando, setSalvando] = useState(false);

  // Atualiza quando abre o modal
  useEffect(() => {
    if (funcionario && open) {
      setFormData({ ...funcionario });
    }
  }, [funcionario, open]);

  // Mudança nos inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === "salario" ? Number(value) : value,
    }));
  };

  // Salvar
  const handleSave = async () => {
    setSalvando(true);
    try {
      const updated = await FuncionarioService.update(formData.id, formData);
      onFuncionarioUpdated(updated);
      onClose();
    } catch (err) {
      console.error("Erro ao atualizar funcionário:", err);
      alert("Erro ao salvar funcionário");
    } finally {
      setSalvando(false);
    }
  };

  if (!funcionario) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Editar Funcionário</DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>

          <TextField
            label="Nome"
            name="nome"
            fullWidth
            value={formData.nome}
            onChange={handleInputChange}
          />

          <TextField
            label="Cargo"
            name="cargo"
            fullWidth
            value={formData.cargo}
            onChange={handleInputChange}
          />

          <TextField
            label="Salário"
            name="salario"
            fullWidth
            type="number"
            value={formData.salario}
            onChange={handleInputChange}
          />

          <TextField
            label="Telefone"
            name="telefone"
            fullWidth
            value={formData.telefone}
            onChange={handleInputChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            label="Data de Admissão"
            name="data_admissao"
            type="date"
            fullWidth
            value={formData.data_admissao}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={salvando}
        >
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarFuncionarioModal;
