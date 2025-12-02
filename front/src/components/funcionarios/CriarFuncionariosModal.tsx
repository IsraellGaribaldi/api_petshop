import { useState, useCallback } from "react";
import { FuncionarioService } from "../../services/FuncionariosServices";
import type { CreateFuncionarioDTO, Funcionario } from "../../services/FuncionariosServices";

import {

Dialog,
DialogTitle,
DialogContent,
DialogActions,
TextField,
Button,
Box,
CircularProgress,
} from "@mui/material";

interface CriarFuncionariosModalProps {
open: boolean;
onClose: () => void;
onSuccess: (novoFuncionario: Funcionario) => void;
}

export const CriarFuncionariosModal = ({
open,
onClose,
onSuccess,
}: CriarFuncionariosModalProps) => {
const INITIAL_FORM_DATA = {
    nome: "",
    telefone: "",
    email: "",
    cargo: "",
    salario: "",
    data_admissao: "",
};

const [formData, setFormData] = useState(INITIAL_FORM_DATA);
const [errors, setErrors] = useState<Record<string, string>>({});
const [salvando, setSalvando] = useState(false);

const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    },
    [errors]
);

const handleSave = useCallback(async () => {

    const payload: CreateFuncionarioDTO = {
        ...formData,
        salario: Number(formData.salario)
    };

    setSalvando(true);

    try {
        const novoFuncionario = await FuncionarioService.create(payload);
        onSuccess(novoFuncionario);

        setFormData(INITIAL_FORM_DATA);
        setErrors({});
        onClose();
    } catch (error) {
        console.error("Erro ao criar funcionário:", error);
        setErrors({ submit: "Erro ao criar funcionário. Tente novamente." });
    } finally {
        setSalvando(false);
    }
}, [formData, onSuccess, onClose]);


const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
}, [onClose]);

return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
            Cadastrar Novo Funcionário
        </DialogTitle>

        <DialogContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <TextField
                    fullWidth
                    label="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite o nome completo"
                    required
                    error={!!errors.nome}
                    helperText={errors.nome}
                />

                <TextField
                    fullWidth
                    label="Telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="Digite o telefone"
                    required
                    error={!!errors.telefone}
                    helperText={errors.telefone}
                />

                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite o email"
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                />

                <TextField
                    fullWidth
                    label="Cargo"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    placeholder="Digite o cargo"
                    required
                    error={!!errors.cargo}
                    helperText={errors.cargo}
                />

                <TextField
                    fullWidth
                    label="Salário"
                    name="salario"
                    type="number"
                    inputProps={{ step: "0.01" }}
                    value={formData.salario}
                    onChange={handleInputChange}
                    placeholder="Digite o salário"
                    required
                    error={!!errors.salario}
                    helperText={errors.salario}
                />

                <TextField
                    fullWidth
                    label="Data de Admissão"
                    name="data_admissao"
                    type="date"
                    value={formData.data_admissao}
                    onChange={handleInputChange}
                    required
                    error={!!errors.data_admissao}
                    helperText={errors.data_admissao}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleClose} color="inherit">
                Cancelar
            </Button>

            <Button
                onClick={handleSave}
                variant="contained"
                color="primary"
                disabled={salvando}
            >
                {salvando ? (
                    <>
                        <CircularProgress size={20} sx={{ mr: 1 }} />
                        Salvando...
                    </>
                ) : (
                    "Cadastrar"
                )}
            </Button>
        </DialogActions>
    </Dialog>
);
};

export default CriarFuncionariosModal;