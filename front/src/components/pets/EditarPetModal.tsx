import React, { useState } from "react";
// Assumindo que a interface Pet está em '../../types/Pet'
import type { Pet } from "../../types/Pet"; 
// Assumindo que a função updatePet está em '../../services/PetServices'
import { updatePet } from "../../services/PetServices"; 
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  MenuItem, // Adicionando MenuItem para o campo Sexo (Enum)
} from "@mui/material";

// --- Tipos de Propriedades ---
interface EditarPetModalProps {
  open: boolean;
  onClose: () => void;
  // O pet que está sendo editado. Pode ser null se o modal for usado de forma genérica
  pet: Pet | null; 
  // Função a ser chamada após a atualização bem-sucedida
  onPetUpdated: (updatedPet: Pet) => void; 
}

// --- Componente EditarPetModal ---
export const EditarPetModal = ({
  open,
  onClose,
  pet,
  onPetUpdated,
}: EditarPetModalProps) => {
  // Estado para armazenar os dados do formulário do Pet
  const [formData, setFormData] = useState<Pet>(
    pet
      ? { ...pet }
      : {
          id: 0,
          nome: "",
          especie: "",
          // 'raça' é opcional no seu PetServices, mas inicializamos como string
          raça: "", 
          sexo: "Macho", // Inicializando com um valor padrão para o enum
          idade: 0,
          idcliente: 0,
        }
  );

  const [salvando, setSalvando] = useState(false);

  // --- Efeito para Sincronizar Dados ---
  // Atualiza form ao abrir modal com um novo Pet
  React.useEffect(() => {
    if (pet && open) {
      setFormData({
        ...pet,
        // Garante que a idade seja tratada como number, mesmo que venha como 0 ou null/undefined
        idade: Number(pet.idade) || 0,
        // Garante que idcliente seja um number
        idcliente: Number(pet.idcliente) || 0,
      });
    }
  }, [pet, open]);

  // --- Handler de Mudança de Input ---
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: name === "idade" || name === "idcliente" ? Number(value) : value,
    }));
  };

  // --- Handler de Salvar ---
  const handleSave = async () => {
    // É crucial ter o ID do Pet e o ID do Cliente.
    if (!formData.id || !formData.idcliente) {
        alert("Erro: ID do Pet ou ID do Cliente ausente.");
        return;
    }

    setSalvando(true);
    try {
      // 1. Chama o serviço de atualização
      const updatedPet = await updatePet(formData.id, formData); 
      
      // 2. Notifica o componente pai com o dado atualizado
      onPetUpdated(updatedPet); 
      
      // 3. Fecha o modal
      onClose(); 
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
      alert("Erro ao salvar pet. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  // Se o pet for null, não renderiza o modal
  if (!pet) {
    return null; 
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Editar Pet: {pet.nome}
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          
          {/* Nome do Pet */}
          <TextField
            fullWidth
            label="Nome do Pet"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome do pet"
          />

          {/* Espécie */}
          <TextField
            fullWidth
            label="Espécie"
            name="especie"
            value={formData.especie}
            onChange={handleInputChange}
            placeholder="Ex: Cachorro, Gato..."
          />

          {/* Raça */}
          <TextField
            fullWidth
            label="Raça"
            name="raça"
            value={formData.raça || ""}
            onChange={handleInputChange}
            placeholder="Digite a raça (opcional)"
          />

          {/* Sexo (Usando Select e MenuItem para o Enum) */}
          <TextField
            fullWidth
            select
            label="Sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
            placeholder="Selecione o sexo"
          >
            <MenuItem value="Macho">Macho</MenuItem>
            <MenuItem value="Fêmea">Fêmea</MenuItem>
          </TextField>

          {/* Idade */}
          <TextField
            fullWidth
            label="Idade"
            name="idade"
            type="number"
            value={formData.idade || ""} // Usar || "" para evitar aviso de valor undefined no campo number
            onChange={handleInputChange}
            placeholder="Idade do pet"
          />
          
          {/* ID do Cliente (Geralmente readonly em um modal de edição de Pet) */}
          <TextField
            fullWidth
            label="ID do Cliente"
            name="idcliente"
            type="number"
            value={formData.idcliente}
            InputProps={{ readOnly: true }} // Torna o campo apenas leitura
            helperText="O dono (Cliente) associado a este pet."
            sx={{ mt: 1 }}
          />
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

export default EditarPetModal;