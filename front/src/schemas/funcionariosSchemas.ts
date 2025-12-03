export function validateCreateFuncionario(data: any) {
    const errors: Record<string, string> = {};

    if (!data.nome) errors.nome = "Nome é obrigatório";
    if (!data.telefone) errors.telefone = "Telefone é obrigatório";
    if (!data.email) errors.email = "Email é obrigatório";
    if (!data.senha) errors.senha = "Senha é obrigatória";
    if (!data.endereco) errors.endereco = "Endereço é obrigatório";

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    return { success: true, data };
}
