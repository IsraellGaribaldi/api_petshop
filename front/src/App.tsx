import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import PetsPage from "./pages/PetsPage";
import Home from "./pages/Home";
import ClientesPage from "./pages/ClientesPage";
import AtendimentosPage from "./pages/AtendimentosPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pets" element={<PetsPage />} />
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/atendimentos" element={<AtendimentosPage />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}
