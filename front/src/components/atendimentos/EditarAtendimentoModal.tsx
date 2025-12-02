import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import type { Atendimento } from "../../types/Atendimento";
import { updateAtendimento } from "../../services/AtendimentoServices";

type PetOption = { id: number; nome: string };
type FuncOption = { idfuncionario: number; nome: string };

type Props = {
  open: boolean;
  atendimento: Atendimento | null;
  onClose: () => void;
  onAtendimentoUpdated: (at: Atendimento) => void;
  pets?: PetOption[];
  funcionarios?: FuncOption[];
};

export default function EditarAtendimentoModal({
  open,
  atendimento,
  onClose,
  onAtendimentoUpdated,
  pets = [],
  funcionarios = [],
}: Props) {
  const [form, setForm] = useState({
    tipoAtendimento: "",
    dataHora: "",
    petid: "",
    funcionarioid: "",
  });

  useEffect(() => {
    if (atendimento) {
      setForm({
        tipoAtendimento: atendimento.tipoAtendimento ?? "",
        dataHora: atendimento.dataHora ?? "",
        petid: String(atendimento.petid ?? ""),
        funcionarioid: String(atendimento.funcionarioid ?? ""),
      });
    }
  }, [atendimento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSalvar = async () => {
    if (!atendimento) return;
    const payload = {
      tipoAtendimento: form.tipoAtendimento,
      dataHora: form.dataHora,
      petid: Number(form.petid),
      funcionarioid: Number(form.funcionarioid),
    };
    const atualizado = await updateAtendimento(atendimento.id, payload);
    onAtendimentoUpdated(atualizado);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Atendimento</DialogTitle>

      <DialogContent dividers>
        <TextField
          margin="dense"
          label="Tipo de Atendimento"
          name="tipoAtendimento"
          fullWidth
          value={form.tipoAtendimento}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Data e Hora"
          type="datetime-local"
          name="dataHora"
          fullWidth
          value={form.dataHora}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          margin="dense"
          label="Pet"
          name="petid"
          select
          fullWidth
          value={form.petid}
          onChange={handleChange}
        >
          {pets.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.nome}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Funcionário"
          name="funcionarioid"
          select
          fullWidth
          value={form.funcionarioid}
          onChange={handleChange}
        >
          {funcionarios.map((f) => (
            <MenuItem key={f.idfuncionario} value={f.idfuncionario}>
              {f.nome}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSalvar}>
          Salvar Alterações
        </Button>
      </DialogActions>
    </Dialog>
  );
}
