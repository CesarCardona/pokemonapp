import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { FC, useEffect, useState } from "react"
import { Pokemon } from "../../interfaces"
import { localFavorites } from "../../utils"
import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon
}

export const PokemonDetail: FC<Props> = ({pokemon}) => {
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
    if(!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  return (
    <>
      <Grid xs={12} sm={4}>
        <Card hoverable css={{padding: '30px'}}>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
              alt={pokemon.name}
              width='100%'
              height='200px'
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
            <Text h1 transform='capitalize'>{pokemon.name}</Text>
            <Button 
              color='gradient'
              ghost={!isInFavorites}
              onClick={onToggleFavorite}
            >
              {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction="row" display="flex">
              <Image 
                src={pokemon.sprites?.front_default} 
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites?.back_default} 
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites?.front_shiny} 
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites?.back_shiny} 
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>    
    </>
  )
}
