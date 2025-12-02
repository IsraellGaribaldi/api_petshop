import React, { useEffect, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

// /C:/computaria/Api1_petshop/front/src/pages/funcionariospage.tsx

type Employee = {
    id: string;
    nome: string;
    cargo: string;
};

function getStoredUser() {
    try {
        const raw = localStorage.getItem("user");
        if (!raw) return null;
        return JSON.parse(raw) as { role?: string; [k: string]: any } | null;
    } catch {
        return null;
    }
}

export default function FuncionariosPage(): JSX.Element {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [employees, setEmployees] = useState<Employee[]>([
        { id: "1", nome: "João Silva", cargo: "Gerente" },
        { id: "2", nome: "Maria Souza", cargo: "Atendente" },
    ]);
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");

    useEffect(() => {
        const user = getStoredUser();
        // Se a sua app usa outro formato, ajuste a verificação de role aqui.
        if (!user || user.role !== "employee") {
            setAuthorized(false);
            // redireciona para login/rota pública; ajuste conforme sua rota
            navigate("/login", { replace: true });
        } else {
            setAuthorized(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addEmployee(e?: React.FormEvent) {
        e?.preventDefault();
        if (!nome.trim() || !cargo.trim()) return;
        const novo: Employee = {
            id: String(Date.now()),
            nome: nome.trim(),
            cargo: cargo.trim(),
        };
        setEmployees((s) => [novo, ...s]);
        setNome("");
        setCargo("");
    }

    function removeEmployee(id: string) {
        if (!confirm("Remover funcionário?")) return;
        setEmployees((s) => s.filter((x) => x.id !== id));
    }

    if (authorized === false) {
        // Enquanto o navigate acontece, evita renderizar conteúdo sensível
        return <div>Redirecionando...</div>;
    }

    if (authorized === null) {
        return <div>Verificando permissões...</div>;
    }

    return (
        <div style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <h1>Painel de Funcionários</h1>
            <p>Área restrita: somente funcionários autenticados podem acessar.</p>

            <section style={{ marginBottom: 20 }}>
                <h2>Adicionar funcionário</h2>
                <form onSubmit={addEmployee} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ padding: 8, flex: 1 }}
                        aria-label="Nome do funcionário"
                    />
                    <input
                        placeholder="Cargo"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        style={{ padding: 8, width: 200 }}
                        aria-label="Cargo do funcionário"
                    />
                    <button type="submit" style={{ padding: "8px 12px" }}>
                        Adicionar
                    </button>
                </form>
            </section>

            <section>
                <h2>Lista de funcionários</h2>
                {employees.length === 0 ? (
                    <p>Nenhum funcionário cadastrado.</p>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Nome</th>
                                <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>Cargo</th>
                                <th style={{ textAlign: "right", borderBottom: "1px solid #ddd", padding: 8 }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{emp.nome}</td>
                                    <td style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>{emp.cargo}</td>
                                    <td style={{ padding: 8, textAlign: "right", borderBottom: "1px solid #f0f0f0" }}>
                                        <button
                                            onClick={() => removeEmployee(emp.id)}
                                            style={{ padding: "6px 10px", marginLeft: 8 }}
                                            aria-label={`Remover ${emp.nome}`}
                                        >
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}