export interface Pet {
  id:        number  
  nome:      String
  especie:   String
  raça?:      String
  sexo:      String
  idade:     number
  idcliente: number
  Atendimento?: {
    tipoAtendimento: string;
    dataHora: string;
  };
}