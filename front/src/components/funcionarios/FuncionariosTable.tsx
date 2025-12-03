import React from "react";
import type { funcionario } from "../../types/Funcionario";
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
import moment from "moment";

interface FuncionariosTableProps {
  funcionarios: funcionario[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (funcionario: funcionario) => void;
}

const FuncionariosTable: React.FC<FuncionariosTableProps> = ({
  funcionarios,
  deletingId,
  onDelete,
  onEdit,
}) => {
  const colunas: string[] = [
    "Nome",
    "CPF",
    "Email",
    "Telefone",
    "Tipo Atendimento",
    "Data/Hora Atendimento",
    "Ações",
  ];

  return (
    <TableContainer className="mt-4 rounded-lg shadow-md">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                align={coluna === "Ações" ? "right" : "left"}
                className="font-bold text-white"
              >
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {funcionarios.length === 0 ? (
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
            funcionarios.map((func) => {
              // Suporte para as duas estruturas possíveis de atendimento
              const atendimento =
                func.Atendimento ?? func.Atendimento?.[0] ?? null;

              return (
                <TableRow
                  key={func.idfuncionario}
                  hover
                  className="hover:bg-blue-50"
                >
                  <TableCell align="left">{func.nome}</TableCell>
                  <TableCell align="left">{func.cpf}</TableCell>
                  <TableCell align="left">{func.email}</TableCell>
                  <TableCell align="left">{func.telefone}</TableCell>

                  {/* Tipo Atendimento */}
                  <TableCell align="left">
                    {atendimento?.tipoAtendimento || "-"}
                  </TableCell>

                  {/* Data/Hora */}
                  <TableCell align="left">
                    {atendimento?.dataHora
                      ? moment(atendimento.dataHora).format(
                          "DD/MM/YYYY HH:mm"
                        )
                      : "-"}
                  </TableCell>

                  {/* AÇÕES */}
                  <TableCell align="right">
                    <div className="flex justify-end gap-2">

                      {/* Editar */}
                      <Tooltip title="Editar">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => onEdit(func)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      {/* Deletar */}
                      <Tooltip title="Remover">
                        <IconButton
                          color="error"
                          size="small"
                          onClick={() => onDelete(func.idfuncionario)}
                          disabled={deletingId === func.idfuncionario}
                        >
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
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FuncionariosTable;
