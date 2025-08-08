export interface Contato {
  id?: number;
  nome: string;
  celular: string;
  email: string;
  telefone?: string;
  favorito?: "S" | "N";
  ativo?: "S" | "N";
}
