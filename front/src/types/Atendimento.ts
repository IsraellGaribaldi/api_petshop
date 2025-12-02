export interface Atendimento {
    
  id: number;
  dataHora: string;
  tipoAtendimento: string;
  petid: number;
  funcionarioid: number;
  pet?: {
    nome: string;
    cpf: string;
  };
  funcionario?: {
    nome: string;
    idfuncionario: number;
  };
}