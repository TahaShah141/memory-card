import { useEffect, useState } from "react"
import { gameOver } from "../App";
import '../styles/card.css'


export default function Card({pokemon, pokemonClicked}) {

    function cardClicked(name) {
        if (pokemon.clicked) gameOver();
        else pokemonClicked(name);
    }

    return (
        <div className="card-container" onClick={() => {cardClicked(pokemon.name)}}>
            <img className="card-img" src={pokemon.imageURL} alt={pokemon.name} />
            {/* <p className="card-text">{pokemon.name.toUpperCase()}</p> */}
        </div>
    )
}