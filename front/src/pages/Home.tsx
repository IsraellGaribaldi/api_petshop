import { Box, Button, Paper, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AVATAR_SIZE = 72;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" minHeight="100vh" width="100vw">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={2} sx={{ p: 3, width: 320 }}>
          <Box textAlign="center" mb={2}>
            <Box display="flex" justifyContent="center" mb={1}>
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

            <Typography variant="h5" component="h1" fontWeight={600} mb={2}>
              PetShop Atendimentos
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              type="button"
              onClick={() => navigate("/clientes")}
            >
              Clientes
            </Button>

            {/* ➜ Botão atualizado para navegar para /atendimentos */}
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              type="button"
              onClick={() => navigate("/atendimentos")}
            >
              Atendimentos
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;