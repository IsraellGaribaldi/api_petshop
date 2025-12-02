export function validateCreateFuncionario(data: any) {
    const errors: Record<string, string> = {};

    if (!data.nome) errors.nome = "Nome é obrigatório";
    if (!data.telefone) errors.telefone = "Telefone é obrigatório";
    if (!data.email) errors.email = "Email é obrigatório";
    if (!data.cargo) errors.cargo = "Cargo é obrigatório";
    if (!data.salario) errors.salario = "Salário é obrigatório";
    if (!data.data_admissao) errors.data_admissao = "Data de admissão é obrigatória";

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    return { success: true, data };
}
