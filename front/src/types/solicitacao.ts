
export interface Solicitacao {
  id: number;
  descricao: string;
  status: 'Pendente' | 'Em Andamento' | 'Concluída' | 'Cancelada';
  clienteId: number; // <--- Adicione isto!
  createdAt: string;
  updatedAt: string;
}