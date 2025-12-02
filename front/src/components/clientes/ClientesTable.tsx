import React from "react";
import type { Cliente } from "../../types/Cliente";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ClientesTableProps {
  clientes: Cliente[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (cliente: Cliente) => void;
}

const ClientesTable: React.FC<ClientesTableProps> = ({
  clientes,
  deletingId,
  onDelete,
  onEdit,
}) => {
  const colunas: string[] = [
    "Nome",
    "Email",
    "Telefone",
    "Endereço",
    "Pet",
    "Espécie",
    "Raça",
    "Idade",
    "Ações",
  ];

  return (
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                align="center"
                className="font-bold text-white"
              >
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {clientes.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={9}
                align="center"
                className="py-6 text-gray-500"
              >
                Nenhum cliente encontrado.
              </TableCell>
            </TableRow>
          ) : (
            clientes.map((cliente) => (
              <TableRow key={cliente.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{cliente.nome}</TableCell>
                <TableCell align="center">{cliente.email}</TableCell>
                <TableCell align="center">{cliente.telefone}</TableCell>
                <TableCell align="center">{cliente.endereco}</TableCell>

                {/* PET */}
                <TableCell align="center">{cliente.pet?.nome || "-"}</TableCell>
                <TableCell align="center">{cliente.pet?.especie || "-"}</TableCell>
                <TableCell align="center">{cliente.pet?.raça || "-"}</TableCell>
                <TableCell align="center">{cliente.pet?.idade ?? "-"}</TableCell>

                {/* AÇÕES */}
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onEdit(cliente)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(cliente.id)}
                        disabled={deletingId === cliente.id}
                        aria-label={`remover-${cliente.id}`}
                      >
                        <DeleteIcon />
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

export default ClientesTable;
