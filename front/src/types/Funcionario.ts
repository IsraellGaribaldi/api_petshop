export interface funcionario {
  idfuncionario: number;
  nome: string; 
  cpf: string;
  telefone:  String;
  email:     String;
  endereço:  String;
  Atendimento?: {
    tipoAtendimento: string;
    dataHora: string;
  };
}
