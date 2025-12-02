import React, { useState } from "react";
import type { Cliente } from "../../types/Cliente";
import { updateCliente } from "../../services/ClienteServices";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface EditarClienteModalProps {
  open: boolean;
  onClose: () => void;
  cliente: Cliente | null;
  onClienteUpdated: (updatedCliente: Cliente) => void;
}

export const EditarClienteModal = ({
  open,
  onClose,
  cliente,
  onClienteUpdated,
}: EditarClienteModalProps) => {

  const [formData, setFormData] = useState<Cliente>(
    cliente
      ? {
          id: cliente.id,
          nome: cliente.nome,
          telefone: cliente.telefone,
          endereco: cliente.endereco,
          email: cliente.email,
          pet: cliente.pet
            ? {
                nome: cliente.pet.nome,
                especie: cliente.pet.especie,
                raça: cliente.pet.raça,
                idade: cliente.pet.idade,
              }
            : {
                nome: "",
                especie: "",
                raça: "",
                idade: 0,
              },
        }
      : {
          id: 0,
          nome: "",
          telefone: "",
          endereco: "",
          email: "",
          pet: {
            nome: "",
            especie: "",
            raça: "",
            idade: 0,
          },
        }
  );

  const [salvando, setSalvando] = useState(false);

  // Atualiza form ao abrir modal (igual ao EditarPacienteModal)
  React.useEffect(() => {
    if (cliente && open) {
      setFormData({
        ...cliente,
        pet: cliente.pet ? { ...cliente.pet } : undefined,
      });
    }
  }, [cliente, open]);

  // Handle que também trata campos aninhados (pet.nome etc.)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Detecta campos do tipo "pet.*"
    if (name.startsWith("pet.")) {
      const [, petField] = name.split(".");

      setFormData((prev) => ({
        ...prev,
        pet: {
          nome: prev.pet?.nome ?? "",
          especie: prev.pet?.especie ?? "",
          raça: prev.pet?.raça ?? "",
          idade: prev.pet?.idade ?? 0,
          [petField]: petField === "idade" ? Number(value) : value,
        },
      }));
      return;
    }

    // Campos normais
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Salvar alterações
  const handleSave = async () => {
    setSalvando(true);
    try {
      await updateCliente(formData.id, formData);
      onClienteUpdated(formData);
      onClose();
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      alert("Erro ao salvar cliente. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Editar Cliente
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>

          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome completo"
          />

          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Digite o telefone"
          />

          <TextField
            fullWidth
            label="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            placeholder="Digite o endereço"
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite o email"
          />

          {/* PET */}
          <Box sx={{ mt: 2 }}>
            <DialogTitle
              sx={{ fontWeight: 500, fontSize: "1rem", p: 0, mb: 1 }}
            >
              Informações do Pet
            </DialogTitle>

            <TextField
              fullWidth
              label="Nome do Pet"
              name="pet.nome"
              value={formData.pet?.nome || ""}
              onChange={handleInputChange}
              placeholder="Digite o nome do pet"
            />

            <TextField
              fullWidth
              label="Espécie"
              name="pet.especie"
              value={formData.pet?.especie || ""}
              onChange={handleInputChange}
              placeholder="Ex: Cachorro, Gato..."
            />

            <TextField
              fullWidth
              label="Raça"
              name="pet.raça"
              value={formData.pet?.raça || ""}
              onChange={handleInputChange}
              placeholder="Digite a raça"
            />

            <TextField
              fullWidth
              label="Idade"
              name="pet.idade"
              type="number"
              value={formData.pet?.idade || ""}
              onChange={handleInputChange}
              placeholder="Idade do pet"
            />
          </Box>

        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={salvando}
        >
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarClienteModal;
