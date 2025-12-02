export interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
  email: string;
  pet?: {
    nome: string;
    especie: string;
    raça: string;
    idade: number;
  }
}