export interface Pokelist {
  count: number;
  next?: string;
  previous?: string;
  results: SinglePokemon[];
}

export interface SinglePokemon {
  name: string;
  url: string;
  id: number;
  image: string;
}
