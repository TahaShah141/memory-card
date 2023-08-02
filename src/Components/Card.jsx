import { useEffect, useState } from "react"
import '../styles/card.css'


export default function Card({pokemon, pokemonClicked, gameOver}) {

    function cardClicked(name) {
        if (pokemon.clicked) gameOver();
        else pokemonClicked(name);
    }

    return (
        <div className="card-container" onClick={() => {cardClicked(pokemon.name)}}>
            <img className="card-img" src={pokemon.imageURL} alt={pokemon.name} />
        </div>
    )
}