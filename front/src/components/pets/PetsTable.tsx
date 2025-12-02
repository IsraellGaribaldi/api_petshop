import React from "react";
import type { Pet } from "../../types/Pet"; // Assumindo a interface Pet
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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pets as PetIcon } from "@mui/icons-material"; // Ícone para representar Pet

// --- Propriedades do Componente ---
interface PetsTableProps {
  pets: Pet[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (pet: Pet) => void;
}

const PetsTable: React.FC<PetsTableProps> = ({
  pets,
  deletingId,
  onDelete,
  onEdit,
}) => {
  const colunas: string[] = [
    "ID",
    "Nome",
    "Espécie",
    "Raça",
    "Sexo",
    "Idade",
    "ID Cliente", // Importante para saber o dono
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
          {pets.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={colunas.length} // ColSpan deve cobrir todas as colunas
                align="center"
                className="py-6 text-gray-500"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PetIcon sx={{ mr: 1 }} /> Nenhum pet encontrado.
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            pets.map((pet) => (
              <TableRow key={pet.id} hover className="hover:bg-green-50">
                {/* DADOS DO PET */}
                <TableCell align="center">{pet.id}</TableCell>
                <TableCell align="center">{pet.nome}</TableCell>
                <TableCell align="center">{pet.especie}</TableCell>
                <TableCell align="center">{pet.raça || "-"}</TableCell>
                <TableCell align="center">{pet.sexo}</TableCell>
                <TableCell align="center">{pet.idade}</TableCell>
                <TableCell align="center">{pet.idcliente}</TableCell> 

                {/* AÇÕES */}
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    {/* Botão de Edição */}
                    <Tooltip title="Editar Pet">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onEdit(pet)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    {/* Botão de Exclusão */}
                    <Tooltip title="Remover Pet">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(pet.id)}
                        disabled={deletingId === pet.id}
                        aria-label={`remover-pet-${pet.id}`}
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

export default PetsTable;