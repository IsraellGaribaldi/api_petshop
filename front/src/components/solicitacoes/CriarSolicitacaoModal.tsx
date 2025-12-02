import { useState, useCallback } from "react";
// Importa a interface Solicitacao
import type { Solicitacao } from "../../types/solicitacao"; 
// Importa o serviço de criação de Solicitação
import { createSolicitacao } from "../../services/SolicitacaoServices"; 
// 🚨 NOVO IMPORT NECESSÁRIO
import { validateCreateSolicitacao } from "../../schemas/solicitacaoValidation"; 

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

// --- Tipos de Propriedades ---
interface CriarSolicitacaoModalProps {
  open: boolean;
  onClose: () => void;
  clienteId: number; 
  onSuccess: (novaSolicitacao: Solicitacao) => void;
}

const INITIAL_FORM_DATA = {
  descricao: "",
};

// --- Componente CriarSolicitacaoModal ---
export const CriarSolicitacaoModal = ({
  open,
  onClose,
  clienteId,
  onSuccess,
}: CriarSolicitacaoModalProps) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  // --- Handler de Mudança de Input ---
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      
      setFormData((prev) => ({
        ...prev,
        [name]: value, 
      }));

      if (errors.descricao) {
        setErrors((prev) => ({ ...prev, descricao: "" }));
      }
    },
    [errors]
  );

  // --- Handler de Salvar (Com Validação Zod) ---
  const handleSave = useCallback(async () => {
    setErrors({});

    const dataToValidate: any = {
      descricao: formData.descricao,
      clienteId: clienteId,
    };

    const validation = validateCreateSolicitacao(dataToValidate); 

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);

    try {
      // Usamos validation.data que é a versão tipada e validada pelo Zod
      const novaSolicitacao = await createSolicitacao(validation.data!);

      onSuccess(novaSolicitacao);
      
      // ✅ CORRIGIDO: Reset do formulário e fechar o modal
      setFormData(INITIAL_FORM_DATA);
      onClose();
      
    } catch (error) {
      console.error("Erro ao criar solicitação:", error);
      setErrors({ submit: "Erro ao criar solicitação. Verifique sua conexão e tente novamente." });
    } finally {
      setSalvando(false);
    }
  }, [formData.descricao, clienteId, onSuccess, onClose]);

  // --- Handler de Fechar (Resetar Formulário) ---
  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Criar Nova Solicitação
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          
          <Typography variant="body2" color="text.secondary">
            Preencha a descrição detalhada abaixo. Sua solicitação será marcada como "Pendente" e o status de acompanhamento aparecerá na sua tela.
          </Typography>

          {/* Descrição da Solicitação */}
          <TextField
            fullWidth
            label="Descreva sua Solicitação"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
            placeholder="Ex: Preciso de suporte para a conta XXX. O problema é..."
            required
            multiline 
            rows={5} 
            error={!!errors.descricao}
            helperText={errors.descricao}
          />

          {/* Campo de ID do Cliente (Apenas Leitura) */}
          <TextField
            fullWidth
            label="ID do Cliente"
            name="clienteId"
            value={clienteId}
            InputProps={{ readOnly: true }}
            helperText="Sua solicitação será vinculada automaticamente ao seu ID."
            size="small"
          />
          
          {/* Erro de Submissão Geral */}
          {errors.submit && (
            <Box sx={{ color: 'red', textAlign: 'center', mt: 1 }}>
                <Typography variant="body2">{errors.submit}</Typography>
            </Box>
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
              Enviando...
            </>
          ) : (
            "Enviar Solicitação"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarSolicitacaoModal;