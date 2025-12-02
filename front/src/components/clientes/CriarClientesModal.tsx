import { useState, useCallback } from "react";
import type { Cliente } from "../../types/Cliente";
import { createCliente } from "../../services/ClienteServices";
import { validateCreateCliente } from "../../schemas/validation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

interface CriarClienteModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (novoCliente: Cliente) => void;
}

export const CriarClienteModal = ({
  open,
  onClose,
  onSuccess,
}: CriarClienteModalProps) => {
  const INITIAL_FORM_DATA = {
    nome: "",
    telefone: "",
    endereco: "",
    email: "",
    pet_nome: "",
    pet_especie: "",
    pet_raça: "",
    pet_idade: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleSave = useCallback(async () => {
    const validation = validateCreateCliente(formData);

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      const novoCliente = await createCliente(validation.data);
      onSuccess(novoCliente);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      setErrors({ submit: "Erro ao criar cliente. Tente novamente." });
    } finally {
      setSalvando(false);
    }
  }, [formData, onSuccess, onClose]);

  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Cadastrar Novo Cliente
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>

          {/* DADOS DO CLIENTE */}
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome completo"
            required
            error={!!errors.nome}
            helperText={errors.nome}
          />

          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Digite o telefone"
            required
            error={!!errors.telefone}
            helperText={errors.telefone}
          />

          <TextField
            fullWidth
            label="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            placeholder="Digite o endereço"
            required
            error={!!errors.endereco}
            helperText={errors.endereco}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite o email"
            required
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* PET */}
          <TextField
            fullWidth
            label="Nome do Pet"
            name="pet_nome"
            value={formData.pet_nome}
            onChange={handleInputChange}
            placeholder="Digite o nome do pet"
            error={!!errors.pet_nome}
            helperText={errors.pet_nome}
          />

          <TextField
            fullWidth
            label="Espécie"
            name="pet_especie"
            value={formData.pet_especie}
            onChange={handleInputChange}
            placeholder="Ex: Cachorro, Gato..."
            error={!!errors.pet_especie}
            helperText={errors.pet_especie}
          />

          <TextField
            fullWidth
            label="Raça"
            name="pet_raça"
            value={formData.pet_raça}
            onChange={handleInputChange}
            placeholder="Digite a raça"
            error={!!errors.pet_raça}
            helperText={errors.pet_raça}
          />

          <TextField
            fullWidth
            label="Idade do Pet"
            name="pet_idade"
            value={formData.pet_idade}
            onChange={handleInputChange}
            placeholder="Ex: 5"
            type="number"
            error={!!errors.pet_idade}
            helperText={errors.pet_idade}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Cancelar
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={salvando}
        >
          {salvando ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Salvando...
            </>
          ) : (
            "Cadastrar"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarClienteModal;
