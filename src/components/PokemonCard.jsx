import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";  // Import the Favorites context
import "../styles/PokemonCard.css";

function PokemonCard({ pokemon }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();  // Access favorites functions
  const isFavorite = favorites.some((fav) => fav.id === pokemon.id);  // Check if the pokemon is a favorite

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(pokemon.id);  // Remove from favorites
    } else {
      addFavorite(pokemon);  // Add to favorites
    }
  };

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-info">
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        </div>
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
      <button onClick={handleFavoriteToggle} className="favorite-btn">
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );  
}

export default PokemonCard;
