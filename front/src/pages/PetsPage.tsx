import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Alert,
} from "@mui/material";
import axios from "axios";

interface Cliente {
  id: number;
  nome: string;
  email: string;
}

const PetsPage = () => {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [idCliente, setIdCliente] = useState<number | "">("");

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Buscar lista de clientes ao carregar a página
  useEffect(() => {
    axios
      .get("http://localhost:3333/clientes")
      .then((res) => setClientes(res.data))
      .catch(() => setError("Erro ao carregar os clientes"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:3333/pets", {
        nome,
        especie,
        raça: raca,
        sexo,
        idade,
        idcliente: idCliente,
      });

      setSuccess("Pet cadastrado com sucesso!");
      setNome("");
      setEspecie("");
      setRaca("");
      setSexo("");
      setIdade("");
      setIdCliente("");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Erro ao cadastrar o pet. Verifique os dados."
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper sx={{ p: 3, width: 400 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Cadastrar Pet
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome do Pet"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <TextField
            label="Espécie"
            fullWidth
            margin="normal"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
          />

          <TextField
            label="Raça"
            fullWidth
            margin="normal"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />

          <TextField
            select
            label="Sexo"
            fullWidth
            margin="normal"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <MenuItem value="Macho">Macho</MenuItem>
            <MenuItem value="Fêmea">Fêmea</MenuItem>
          </TextField>

          <TextField
            label="Idade"
            type="number"
            fullWidth
            margin="normal"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
          />

          <TextField
            select
            label="Dono (Cliente)"
            fullWidth
            margin="normal"
            value={idCliente}
            onChange={(e) => setIdCliente(Number(e.target.value))}
          >
            {clientes.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.nome} ({c.email})
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default PetsPage;
