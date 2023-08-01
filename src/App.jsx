import { useEffect, useState } from 'react';
import './App.css'
import Cards from './Components/Cards';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'; 

export function getRandomIndexes(n, range=1000) {
  let i = [];
  for (let r = 0; r < n; r++) {
    let num;
    do {
      num = Math.round(Math.random()*range) % range;

    } while (i.includes(num));

    i.push(num);
  }

  return i;
}

async function fetchPokemon(index) {
  let response = await fetch(baseUrl+index);
  let pokemon = await response.json();

  return pokemon;
}

async function fetchPokemons(indexes) {
  let pokesWaiting = [];
  indexes.forEach(index => pokesWaiting.push(fetchPokemon(index)));
  let pokemons = await Promise.all(pokesWaiting);

  return pokemons;
}

export function gameOver() {
  alert("Game Over");
}

function App() {

  const [count, setCount] = useState(78);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    async function getPokemons(n) {
      let indexes = getRandomIndexes(n);
      let pokemonInfos = await fetchPokemons(indexes);

      let pokemons = [];
      pokemonInfos.forEach(pokemon => {
          let poke = {
            name: pokemon.name, 
            imageURL: pokemon.sprites.front_default, 
            clicked: false
          };

          pokemons.push(poke);
        });
      setPokemons(pokemons);
      setLoading(false);
    }

    getPokemons(count);

  }, [count]);

  return (
    <>
    {loading && <p className="loading">...Loading</p>}
    {!loading && <Cards pokemons={pokemons} />}
    </>
  )
}

export default App
