import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <div>
        {pokemon.types.map((typeSlot) => (
          <span key={typeSlot.type.name} className="type">
            {typeSlot.type.name}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default PokemonCard;
