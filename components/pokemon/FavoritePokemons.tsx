import { Grid, Card } from '@nextui-org/react'
import React from 'react'
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props{
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        // Si tiene favoritos los mapea en un array y muestra cada uno de los favoritos, los cuales se obtienen desde localFavorites
        pokemons. map(id => (
          <FavoriteCardPokemon pokemonId={id} key={id}/>
        ))
      }
    </Grid.Container>
  )
}
