import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonDetail } from '../../components/pokemon/PokemonDetail';

interface Props {
  pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
          <PokemonDetail pokemon={pokemon} ></PokemonDetail>
      </Grid.Container>
    </Layout>
  )
}

// Con esto genero todas las páginas de forma estática y dinámica
export const getStaticPaths: GetStaticPaths = async () => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`) // Creo un array con los valores que sé que obtendré (151) para mapearlos y crear el index(id)

  return {
    paths: pokemon151.map( id => ({ // Con esto le digo que cada valor del .map va a ser un path y hago un mapeo de los valores creados arriba, que ahora se llamarán ID
      params: {id} // Con esto le digo que el id va a ser el parametro de la url
    })),
    
     fallback: false
    
      // paths: [ // La cantidad de paths es la cantidad de páginas que voy a pregenerar
      // {
      //   params: {
      //     id: '1',  // Esto tiene que ser un string para que se pueda poner en el nombre de la página y el url
      //   }
      // },
      // {
      //   params: {
      //     id: '2',  // Esto tiene que ser un string para que se pueda poner en el nombre de la página y el url
      //   }
  }
}

// Con esto obtengo todas las propiedades antes del render
export const getStaticProps: GetStaticProps = async ({params}) => { // Estoy recibiendo los params desde las propiedades del getStaticPaths

  const {id} = params as {id: string}; // Obtengo el id desde los params y lo formateo como string
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`); // Obtengo la data desde la api, siempre debe llamarse data

  return { // Retorno las propiedades
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage