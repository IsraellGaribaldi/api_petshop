import { useState, useCallback } from "react";
// Importa a interface Pet (assumindo que está em '../../types/Pet')
import type { Pet } from "../../types/Pet"; 
// Importa o serviço de criação de Pet (assumindo que está em '../../services/PetServices')
import { createPet } from "../../services/PetServices"; 
// Importa o esquema de validação de Pet (você precisará criar este arquivo)
import { validateCreatePet } from "../../schemas/validation"; 
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
  MenuItem, // Necessário para o campo 'sexo'
} from "@mui/material";
// Importa o tipo de input de criação de Pet (assumindo que está em seu arquivo de schemas)
import type { CreatePetInput } from "../../schemas/petSchemas";
// --- Tipos de Propriedades ---
interface CriarPetModalProps {
  open: boolean;
  onClose: () => void;
  // O ID do cliente ao qual este novo pet será associado
  idcliente: number; 
  onSuccess: (novoPet: Pet) => void;
}

// ⚠️ AJUSTE: Mudar 'idade' para string para lidar com input type="number" vazio ("")
const INITIAL_FORM_DATA = {
  nome: "",
  especie: "",
  raça: "",
  sexo: "Macho" as "Macho" | "Fêmea", // Informa ao TS o tipo exato
  idade: "", // Alterado para string
};

// --- Componente CriarPetModal ---
export const CriarPetModal = ({
  open,
  onClose,
  idcliente,
  onSuccess,
}: CriarPetModalProps) => {
  // Estado para os dados do formulário do Pet (agora com 'idade' como string)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  // --- Handler de Mudança de Input ---
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      
      setFormData((prev) => ({
        ...prev,
        // Todos os valores de input são strings
        [name]: value, 
      }));

      // Limpa erro ao digitar
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  // --- Handler de Salvar ---
  const handleSave = useCallback(async () => {
    // 1. Prepara os dados para validação/API
    // Conversão de tipos: 'idade' (string) para 'number'
    const idadeNumber = Number(formData.idade);
    
    // Se a string 'idade' estiver vazia, o Number(formData.idade) retorna 0, o que é OK para validação Zod.
    
    const dataToValidate: CreatePetInput = {
      ...formData,
      // Garante que a idade seja um número. Se a string for inválida ou vazia, Zod fará a checagem.
      idade: idadeNumber, 
      idcliente: idcliente,
    };
    
    // 2. Validação usando Zod
    const validation = validateCreatePet(dataToValidate); 

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      // 3. Chamada à API
      const novoPet = await createPet(validation.data);
      
      // 4. Sucesso
      onSuccess(novoPet);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao criar pet:", error);
      setErrors({ submit: "Erro ao criar pet. Tente novamente." });
    } finally {
      setSalvando(false);
    }
  }, [formData, idcliente, onSuccess, onClose]);

  // --- Handler de Fechar (Resetar Formulário) ---
  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Cadastrar Novo Pet (Cliente ID: {idcliente})
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
            required
            error={!!errors.nome}
            helperText={errors.nome}
          />

          {/* Espécie */}
          <TextField
            fullWidth
            label="Espécie"
            name="especie"
            value={formData.especie}
            onChange={handleInputChange}
            placeholder="Ex: Cachorro, Gato..."
            required
            error={!!errors.especie}
            helperText={errors.especie}
          />

          {/* Raça */}
          <TextField
            fullWidth
            label="Raça"
            name="raça"
            value={formData.raça}
            onChange={handleInputChange}
            placeholder="Digite a raça (opcional)"
            error={!!errors.raça}
            helperText={errors.raça}
          />
          
          {/* Sexo (Enum) */}
          <TextField
            select // Adiciona o Select
            fullWidth
            label="Sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
            required
            error={!!errors.sexo}
            helperText={errors.sexo}
          >
            <MenuItem value="Macho">Macho</MenuItem>
            <MenuItem value="Fêmea">Fêmea</MenuItem>
          </TextField>

          {/* Idade */}
          <TextField
            fullWidth
            label="Idade do Pet"
            name="idade"
            // ⚠️ AJUSTE: Usar a string vazia diretamente do estado
            value={formData.idade} 
            onChange={handleInputChange}
            placeholder="Ex: 5"
            type="number"
            required
            error={!!errors.idade}
            helperText={errors.idade}
          />
          
          {/* Campo de ID do Cliente (Apenas Leitura) */}
          <TextField
            fullWidth
            label="ID do Cliente"
            name="idcliente"
            value={idcliente}
            InputProps={{ readOnly: true }}
            helperText="O Pet será vinculado automaticamente a este cliente."
          />
          
          {/* Erro de Submissão Geral */}
          {errors.submit && (
            <Box sx={{ color: 'red', textAlign: 'center' }}>{errors.submit}</Box>
          )}

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
            "Cadastrar Pet"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarPetModal;
