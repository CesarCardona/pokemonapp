import { useEffect, useState } from 'react'
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons)
  
  }, [])
  
  return (
    <Layout title='Pokemons Favoritos'>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites />) // Si el state no tiene pokemons favoritos mostrará este layout
        : (
          <FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage