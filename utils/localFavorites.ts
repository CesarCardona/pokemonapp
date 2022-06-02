const toggleFavorite = (id: number) =>{

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)){
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else{
    favorites.push (id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Esta función se ejecuta tanto del lado del cliente como del lado del servidor, en el lado del servidor arroja undefined y crea un error
const existInFavorites = (id: number) :Boolean =>{
  if (typeof window === 'undefined') return false;  // Con esto le indico que únicamente ejecute el código que está debajo de esto si typeof window no es undefined y hago que detenga la ejecución si es undefined
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  return favorites.includes(id); // True or False
}

const pokemons = (): number[] =>{
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existInFavorites,
  pokemons
}