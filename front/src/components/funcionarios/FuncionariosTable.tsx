import React from "react";
import type { funcionario } from "../../types/Funcionario"; // AJUSTE O PATH
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment"; // Necessário para formatar a data/hora

/**
 * Interface que define as propriedades do componente FuncionariosTable.
 */
interface FuncionariosTableProps {
  // Lista de funcionários a serem exibidos na tabela
  funcionarios: funcionario[];
  // ID do funcionário que está em processo de exclusão (para desabilitar o botão)
  deletingId: number | null;
  // Callback para a ação de exclusão
  onDelete: (id: number) => void;
  // Callback para a ação de edição
  onEdit: (funcionario: funcionario) => void;
}

const FuncionariosTable: React.FC<FuncionariosTableProps> = ({
  funcionarios,
  deletingId,
  onDelete,
  onEdit,
}) => {
  // Definição das colunas da tabela
  const colunas: string[] = [
    "Nome",
    "CPF",
    "Email",
    "Telefone",
    "Endereço",
    "Tipo Atendimento",
    "Data/Hora Atendimento",
    "Ações",
  ];

  return (
    <TableContainer className="mt-4 rounded-lg shadow-md">
      <Table>
        {/* Cabeçalho da Tabela */}
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                // Ajusta o alinhamento de 'Ações' para ficar à direita
                align={coluna === "Ações" ? "right" : "left"}
                className="font-bold text-white"
              >
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Corpo da Tabela */}
        <TableBody>
          {funcionarios.length === 0 ? (
            // Linha exibida quando não há dados
            <TableRow>
              <TableCell
                colSpan={colunas.length}
                align="center"
                className="py-6 text-gray-500"
              >
                Nenhum funcionário encontrado.
              </TableCell>
            </TableRow>
          ) : (
            // Mapeia e renderiza a linha para cada funcionário
            funcionarios.map((func) => (
              <TableRow key={func.idfuncionario} hover className="hover:bg-blue-50">
                <TableCell align="left">{func.nome}</TableCell>
                <TableCell align="left">{func.cpf}</TableCell>
                <TableCell align="left">{func.email}</TableCell>
                <TableCell align="left">{func.telefone}</TableCell>
                <TableCell align="left">{func.endereço}</TableCell>

                {/* Dados de Atendimento */}
                <TableCell align="left">
                  {func.Atendimento?.tipoAtendimento || "-"}
                </TableCell>
                <TableCell align="left">
                  {func.Atendimento?.dataHora
                    ? moment(func.Atendimento.dataHora).format("DD/MM/YYYY HH:mm")
                    : "-"}
                </TableCell>

                {/* Coluna de Ações */}
                <TableCell align="right">
                  <div className="flex justify-end gap-2">
                    {/* Botão de Edição */}
                    <Tooltip title="Editar">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onEdit(func)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    {/* Botão de Exclusão */}
                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(func.idfuncionario)}
                        // Desabilita o botão se o funcionário estiver sendo deletado
                        disabled={deletingId === func.idfuncionario}
                        aria-label={`remover-${func.idfuncionario}`}
                      >
                        {/* Mostra um spinner durante a exclusão */}
                        {deletingId === func.idfuncionario ? (
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

export default FuncionariosTable;