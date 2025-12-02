import { useState } from "react";
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
import { createAtendimento } from "../../services/AtendimentoServices";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: (novo: Atendimento) => void;
  pets: { id: number; nome: string }[];
  funcionarios: { idfuncionario: number; nome: string }[];
};

export default function CriarAtendimentoModal({
  open,
  onClose,
  onSuccess,
  pets,
  funcionarios,
}: Props) {
  const [form, setForm] = useState({
    dataHora: "",
    tipoAtendimento: "",
    petid: "",
    funcionarioid: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSalvar = async () => {
    const payload = {
      dataHora: form.dataHora,
      tipoAtendimento: form.tipoAtendimento,
      petid: Number(form.petid),
      funcionarioid: Number(form.funcionarioid),
    };

    const novo = await createAtendimento(payload);
    onSuccess(novo);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Novo Atendimento</DialogTitle>

      <DialogContent>
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
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
