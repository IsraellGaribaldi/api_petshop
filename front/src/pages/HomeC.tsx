import { Box, Button, Paper, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react"; // Boa prática importar React

const AVATAR_SIZE = 72;

const HomeC: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" minHeight="100vh" width="100vw">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={2} sx={{ p: 4, width: 350 }}>
          <Box textAlign="center" mb={3}>
            {/* --- Logotipo --- */}
            <Box display="flex" justifyContent="center" mb={2}>
              <Avatar
                src="https://t3.ftcdn.net/jpg/05/52/19/26/240_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg"
                alt="Pet Shop Logo"
                sx={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  bgcolor: "transparent",
                }}
                slotProps={{ img: { loading: "lazy" } }}
              />
            </Box>

            <Typography variant="h5" component="h1" fontWeight={600} mb={3}>
              PetShop Atendimentos
            </Typography>

            {/* --- Opções de Acesso --- */}
            <Box display="flex" flexDirection="column" gap={2}>
              
              {/* 1. Clientes (Login Geral) - Navega para /login */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="button"
                onClick={() => navigate("/login")}
              >
                Acesso Cliente (Login)
              </Button>

              {/* 2. Listagem de Atendimentos (Geral / Funcionário) - Navega para /atendimentos */}
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                type="button"
                onClick={() => navigate("/atendimentos")}
              >
                Visualizar Atendimentos
              </Button>

              {/* 3. ✅ NOVO BOTÃO: Solicitações Específicas do Cliente (assumindo rota /cliente/solicitacoes) */}
              <Button
                variant="outlined" // Usando outlined para diferenciar
                color="info"
                fullWidth
                type="button"
                // Assumindo que ClienteSolicitacoesPage.ts está mapeada para esta rota
                onClick={() => navigate("/cliente/solicitacoes")} 
              >
                Minhas Solicitações
              </Button>
              
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default HomeC;