import React, { useState, useEffect } from "react";
// Assumindo que a interface Solicitacao está em '../../types/Solicitacao'
import type { Solicitacao } from "../../types/solicitacao";
// Importa a função de atualização para o serviço de Solicitações
import { updateSolicitacao } from "../../services/SolicitacaoServices"; // AJUSTE O PATH
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

// --- Tipos de Propriedades ---
interface AcaoSolicitacaoModalProps {
  open: boolean;
  onClose: () => void;
  // A solicitação que será alterada
  solicitacao: Solicitacao | null;
  // O status para o qual a solicitação será movida (Ex: 'Concluída' ou 'Cancelada')
  acaoStatus: "Concluída" | "Cancelada";
  // Função a ser chamada após a atualização bem-sucedida
  onSolicitacaoUpdated: (updatedSolicitacao: Solicitacao) => void;
}

// --- Componente AcaoSolicitacaoModal ---
export const AcaoSolicitacaoModal: React.FC<AcaoSolicitacaoModalProps> = ({
  open,
  onClose,
  solicitacao,
  acaoStatus,
  onSolicitacaoUpdated,
}) => {
  // Estado para armazenar observações adicionais (opcional)
  const [observacao, setObservacao] = useState("");
  const [salvando, setSalvando] = useState(false);

  // Limpa o campo de observação ao abrir com uma nova solicitação/ação
  useEffect(() => {
    if (open) {
      setObservacao("");
    }
  }, [solicitacao, acaoStatus, open]);

  // --- Handler de Salvar (Mudar Status) ---
  const handleSave = async () => {
    if (!solicitacao || !solicitacao.id) {
        alert("Erro: Solicitação inválida.");
        return;
    }

    setSalvando(true);
    try {
      // 1. Prepara os dados de atualização: Apenas o novo status
      const dataToUpdate = {
        status: acaoStatus,
        // Você poderia enviar a observação para ser salva em um campo opcional no banco, se houver
        // observacao: observacao 
      };

      // 2. Chama o serviço de atualização
      const updatedSolicitacao = await updateSolicitacao(solicitacao.id, dataToUpdate);
      
      // 3. Notifica o componente pai
      onSolicitacaoUpdated(updatedSolicitacao);
      
      // 4. Fecha o modal
      onClose();
    } catch (error) {
      console.error(`Erro ao mudar status para ${acaoStatus}:`, error);
      alert(`Erro ao salvar status. Tente novamente.`);
    } finally {
      setSalvando(false);
    }
  };

  if (!solicitacao) {
    return null; 
  }

  // Define a cor e o título do modal com base na ação
  const isConclusao = acaoStatus === "Concluída";
  const titleColor = isConclusao ? "primary" : "error";
  const actionText = isConclusao ? "Concluir Solicitação" : "Cancelar Solicitação";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem", color: (theme) => theme.palette[titleColor].main }}>
        {actionText}
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <Typography variant="body1">
            Você está prestes a marcar a solicitação **ID {solicitacao.id}** com o status: **{acaoStatus}**.
            Confirme abaixo se deseja prosseguir.
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Descrição: {solicitacao.descricao.length > 150 ? solicitacao.descricao.substring(0, 150) + '...' : solicitacao.descricao}
          </Typography>

          {/* Campo Opcional para Observação */}
          <TextField
            fullWidth
            label={`Observação (Opcional) - Motivo do ${acaoStatus === 'Cancelada' ? 'Cancelamento' : 'Conclusão'}`}
            name="observacao"
            multiline
            rows={3}
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Adicione um comentário ou justificativa, se necessário."
            sx={{ mt: 2 }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Voltar
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          color={titleColor}
          disabled={salvando}
          startIcon={salvando ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {salvando ? `${acaoStatus === 'Concluída' ? 'Concluindo' : 'Cancelando'}...` : `Confirmar ${acaoStatus}`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AcaoSolicitacaoModal;