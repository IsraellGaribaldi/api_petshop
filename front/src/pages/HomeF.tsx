import { Box, Button, Paper, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react"; // Boa prática importar React
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Adicionando um ícone para estética

const AVATAR_SIZE = 72;

const HomeF: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" minHeight="100vh" width="100vw">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={3} sx={{ p: 4, width: 380, borderRadius: 2 }}>
          <Box textAlign="center" mb={4}>
            {/* --- Logotipo --- */}
            <Box display="flex" justifyContent="center" mb={2}>
              <Avatar
                src="https://t3.ftcdn.net/jpg/05/52/19/26/240_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg"
                alt="Pet Shop Logo"
                sx={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  bgcolor: "transparent",
                  mb: 1,
                }}
              />
            </Box>

            <Typography variant="h5" component="h1" fontWeight={600}>
              PetShop - Gestão
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Selecione o módulo de acesso
            </Typography>
          </Box>

          {/* --- Acesso Principal (Login) --- */}
          <Typography variant="subtitle1" fontWeight={500} mb={1}>
            Acesso Geral
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 3 }}
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/login")}
          >
            Entrar (Clientes e Funcionários)
          </Button>

          {/* --- Acesso Rápido / Admin --- */}
          <Typography variant="subtitle1" fontWeight={500} mb={1}>
            Acesso Rápido (Gerência)
          </Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
            
            {/* 1. AtendimentosPage */}
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => navigate("/atendimentos")}
            >
              Atendimentos
            </Button>

            {/* 2. FuncionarioSolicitacoesPage */}
            <Button
              variant="outlined"
              color="info"
              size="small"
              onClick={() => navigate("/solicitacoes")} 
            >
              Solicitações
            </Button>

            {/* 3. FuncionariosPage */}
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={() => navigate("/funcionarios")}
            >
              Funcionários
            </Button>

            {/* 4. ClientesPage */}
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={() => navigate("/clientes")}
            >
              Clientes
            </Button>

            {/* 5. PetsPage */}
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ gridColumn: 'span 2' }} // Ocupa duas colunas para destaque ou alinhamento
              onClick={() => navigate("/pets")}
            >
              Pets Cadastrados
            </Button>
            
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default HomeF;