import React from "react";
// Assumindo que a interface Solicitacao está definida ou importada
import type { Solicitacao } from "../../types/solicitacao"; 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Box,
  CircularProgress,
} from "@mui/material"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListAlt as SolicitacaoIcon } from "@mui/icons-material";
import moment from "moment"; // Importação necessária para formatação de datas

// --- Propriedades do Componente ---
interface SolicitacoesTableProps {
  solicitacoes: Solicitacao[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  // As novas props para as ações de status
  onConcluir: (solicitacao: Solicitacao) => void;
  onCancelar: (solicitacao: Solicitacao) => void;
}

const SolicitacoesTable: React.FC<SolicitacoesTableProps> = ({
  solicitacoes,
  deletingId,
  onDelete,
  onConcluir, // Recebe a nova prop
  onCancelar, // Recebe a nova prop
}) => {
  // Definição das colunas da tabela para o modelo Solicitacao
  const colunas: string[] = [
    "ID",
    "Descrição",
    "Status",
    "Criada em",
    "Atualizada em",
    "Ações",
  ];

  const formatarData = (date: Date | string): string => {
    // Verifica se a data é válida antes de formatar
    return date ? moment(date).format("DD/MM/YYYY HH:mm") : "-";
  };

  return (
    <TableContainer className="mt-4 rounded-lg shadow-md">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                // Alinhamento para 'Ações' à direita, o restante centralizado ou à esquerda
                align={coluna === "Ações" ? "right" : "center"}
                className="font-bold text-white"
              >
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {solicitacoes.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={colunas.length}
                align="center"
                className="py-6 text-gray-500"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SolicitacaoIcon sx={{ mr: 1 }} /> Nenhuma solicitação encontrada.
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            solicitacoes.map((solicitacao) => (
              <TableRow key={solicitacao.id} hover className="hover:bg-blue-50">
                {/* DADOS DA SOLICITAÇÃO */}
                <TableCell align="center">{solicitacao.id}</TableCell>
                <TableCell align="left">{solicitacao.descricao}</TableCell>
                <TableCell align="center">{solicitacao.status}</TableCell>
                
                {/* Data e Hora de Criação */}
                <TableCell align="center">{formatarData(solicitacao.createdAt)}</TableCell>
                
                {/* Data e Hora de Atualização */}
                <TableCell align="center">{formatarData(solicitacao.updatedAt)}</TableCell>

                {/* AÇÕES */}
                <TableCell align="right">
                  <div className="flex justify-end gap-2">
                    {/* Botão de Concluir */}
                    <Tooltip title="Marcar como Concluída">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onConcluir(solicitacao)}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>

                    {/* Botão de Cancelar */}
                    <Tooltip title="Marcar como Cancelada">
                      <IconButton
                        color="warning"
                        size="small"
                        onClick={() => onCancelar(solicitacao)}
                      >
                        <CancelIcon />
                      </IconButton>
                    </Tooltip>

                    {/* Botão de Exclusão */}
                    <Tooltip title="Remover Solicitação">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(solicitacao.id)}
                        // Desabilita o botão se a solicitação estiver em processo de exclusão
                        disabled={deletingId === solicitacao.id}
                        aria-label={`remover-solicitacao-${solicitacao.id}`}
                      >
                        {/* Mostra um spinner durante a exclusão */}
                        {deletingId === solicitacao.id ? (
                           <CircularProgress size={20} />
                        ) : (
                           <DeleteIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SolicitacoesTable;