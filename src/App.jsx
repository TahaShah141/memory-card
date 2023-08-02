import { useEffect, useState } from 'react';
import './App.css'
import Cards from './Components/Cards';
import Startup from './Components/Startup';
import Gameover from './Components/Gameover';
import Gamewon from './Components/Gamewon';

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

function App() {

  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [starting, setStarting] = useState(true);
  const [gameover, setGameOver] = useState(false);
  const [gamewon, setGameWon] = useState(false);

  function gameOver() {
    setGameOver(true);
  }

  function setDifficulty(difficulty) {
    setCount(difficulty);
    setLoading(true);
    setStarting(false);
  }

  function startOver() {
    setStarting(true);
    setCount(0);
    setGameOver(false);
    setLoading(false);
    setGameWon(false);
  }

  function playAgain() {
    setLoading(true);
    setGameOver(false);
    setGameWon(false);
  }

  function gameWon() {
    setGameWon(true);
  }

  useEffect(() => {
    async function getPokemons(n) {
      console.log("loadingPokemon")
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

    if (loading) getPokemons(count);

  }, [loading]);

  return (
    <>
    {gameover && <Gameover startOver={startOver} playAgain={playAgain}/>}
    {gamewon && <Gamewon startOver={startOver} playAgain={playAgain}/>}
    {loading && <p className="loading">...Loading</p>}
    {!loading && !starting && !gameover && !gamewon && <Cards pokemons={pokemons} gameOver={gameOver} gameWon={gameWon}/>}
    {starting && <Startup difficulties={[12, 30, 60]} setDifficulty={setDifficulty}/>}
    </>
  )
}

export default App
