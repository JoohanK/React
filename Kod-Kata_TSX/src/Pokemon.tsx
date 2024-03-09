import React, { useState } from 'react'


type Pokemon = {
    name: string;
    level: number;
    evolution: Boolean;
    move: string;
};

const PokemonList = () => {

    const starterPokemon: Pokemon [] =  [
        {name: "Charmander", level: 5, evolution: true, move: "Ember"},
        {name: "Squartle", level: 5, evolution: true, move: "Water Gun"},
        {name: "Bulbasaur", level: 5, evolution: true, move: "Razor Leaf"}
    ]

    const [pokemon, setPokemon] = useState(starterPokemon);

  return (
    <>
    <div>
        <h1>Pokemon List</h1>
      <ul>{pokemon.map((p: Pokemon) => {
        return <li key={p.name}> {p.name} |  Special Move:  {p.move}</li>
      })}
      </ul>
    </div>
    </>
  )
}

export default PokemonList
