import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => { // Esto lo uso para obtener solo los datos que necesito
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); // Obtengo la data desde la api, siempre debe llamarse data
 
  return{
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}