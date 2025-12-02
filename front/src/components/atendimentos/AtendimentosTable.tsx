import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Atendimento } from "../../types/Atendimento";

type Props = {
  atendimentos: Atendimento[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (atendimento: Atendimento) => void;
};

const AtendimentosTable = ({ atendimentos, deletingId, onDelete, onEdit }: Props) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell>Data / Hora</TableCell>
            <TableCell>Funcionário</TableCell>
            <TableCell>Pet</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {atendimentos.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.tipoAtendimento}</TableCell>
              <TableCell>{a.dataHora}</TableCell>
              <TableCell>{a.funcionario?.nome ?? "—"}</TableCell>
              <TableCell>{a.pet?.nome ?? "—"}</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onEdit(a)} aria-label="editar">
                  <EditIcon />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={() => onDelete(a.id)}
                  aria-label="excluir"
                >
                  {deletingId === a.id ? (
                    <CircularProgress size={18} />
                  ) : (
                    <DeleteIcon color="error" />
                  )}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AtendimentosTable;
