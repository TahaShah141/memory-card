import { useEffect, useState } from "react"
import Card from "./Card"
import '../styles/cards.css'
import { getRandomIndexes } from "../App";

function shuffleArray(arr) {
    let newIndexes = getRandomIndexes(arr.length, arr.length);

    console.log("shufflinh array");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[newIndexes[i]]);
    }
    console.log("Shuffled");
    return newArr;
}

export default function Cards({pokemons, gameOver, gameWon}) {

    const [count, setCount] = useState(0);
    const [pokes, setPokemons] = useState([]);

    function pokemonClicked(name) {
        console.log(name);
        console.log(pokes);
        let index = pokes.findIndex(pokemon => pokemon.name === name);
        console.log(index);
        if (index !== -1) pokes[index].clicked = true;

        let newPokes = shuffleArray(pokes);
        setPokemons(newPokes);
        setCount(count+1);
        if (count+1 === pokes.length) gameWon();
    }

    useEffect(() => {
        setPokemons(pokemons);
    }, [pokemons]);

    let cards = pokes.map(pokemon => <Card key={pokemon.name} pokemon={pokemon} pokemonClicked={pokemonClicked} gameOver={gameOver}/> );

    return (
        <>
        <div className="cards-container">
            {cards}
        </div>
        <p className="counter">{count}</p>
        </>
    )
}