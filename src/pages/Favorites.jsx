import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";  // Import the Favorites context
import PokemonCard from "../components/PokemonCard";  // Reuse the PokemonCard component for displaying favorites


function Favorites() {
  const { favorites } = useFavorites();  // Access the favorites from the context

  return (
    <div className="favorites-page">
      <h1>Your Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite Pokémon yet. Start adding some!</p>
      ) : (
        <div className="pokemon-list">
          {favorites.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />  // Display each favorite Pokémon using PokemonCard
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
