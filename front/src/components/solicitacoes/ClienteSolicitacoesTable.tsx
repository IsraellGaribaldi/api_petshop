import React from 'react';
import type { Solicitacao } from "../../types/solicitacao"; // Importa o tipo Solicitacao
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  Typography,
} from "@mui/material";

// --- Tipos de Propriedades ---
interface ClienteSolicitacoesTableProps {
  solicitacoes: Solicitacao[];
}

// --- Funções Auxiliares ---
/**
 * Retorna a cor do Chip com base no status da solicitação.
 */
const getStatusColor = (status: Solicitacao['status']): "default" | "primary" | "secondary" | "error" | "warning" | "success" | "info" => {
  switch (status) {
    case 'Concluída':
      return 'success';
    case 'Em Andamento':
      return 'primary';
    case 'Cancelada':
      return 'error';
    case 'Pendente':
    default:
      return 'warning';
  }
};

/**
 * Formata a data para exibição.
 */
const formatDate = (date: Date | string): string => {
  // Converte a string ou Date para um objeto Date
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// --- Componente Principal ---
export const ClienteSolicitacoesTable: React.FC<ClienteSolicitacoesTableProps> = ({
  solicitacoes,
}) => {
  if (solicitacoes.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Nenhuma solicitação encontrada.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Crie uma nova solicitação para começar.
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="tabela de solicitações do cliente">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Data de Criação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Última Atualização</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitacoes.map((solicitacao) => (
            <TableRow
              key={solicitacao.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {solicitacao.id}
              </TableCell>
              <TableCell>
                {/* Limita a descrição para caber na tabela, mas o cliente pode ver a descrição completa 
                    em um modal de visualização (não implementado aqui). */}
                <Typography variant="body2">
                    {solicitacao.descricao.length > 80 
                        ? solicitacao.descricao.substring(0, 80) + '...' 
                        : solicitacao.descricao}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={solicitacao.status}
                  size="small"
                  color={getStatusColor(solicitacao.status)}
                  sx={{ fontWeight: 600 }}
                />
              </TableCell>
              <TableCell>{formatDate(solicitacao.createdAt)}</TableCell>
              <TableCell>{formatDate(solicitacao.updatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClienteSolicitacoesTable;