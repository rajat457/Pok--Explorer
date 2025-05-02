import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../contexts/FavoritesContext";  // Import the Favorites context
import "../styles/PokemonDetail.css";

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();  // Access favorites context
  const [pokemon, setPokemon] = useState(null);
  const [evolution, setEvolution] = useState([]);

  const isFavorite = favorites.some((fav) => fav.id === pokemon?.id);  // Check if the pokemon is a favorite

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(pokemon.id);  // Remove from favorites
    } else {
      addFavorite(pokemon);  // Add to favorites
    }
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(res.data);

        const species = await axios.get(res.data.species.url);
        const evoRes = await axios.get(species.data.evolution_chain.url);

        const evoChain = [];
        let evoData = evoRes.data.chain;

        do {
          evoChain.push(evoData.species.name);
          evoData = evoData.evolves_to[0];
        } while (evoData);

        setEvolution(evoChain);
      } catch (error) {
        console.error("Error loading details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <p>Loading details...</p>;

  return (
    <div className="detail-view">
      <div className="pokemon-header">
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <button onClick={handleFavoriteToggle} className="favorite-btn1">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
  
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
  
      <h3>Moves</h3>
      <ul>
        {pokemon.moves.slice(0, 10).map((m) => (
          <li key={m.move.name}>{m.move.name}</li>
        ))}
      </ul>
  
      <h3>Evolution Chain</h3>
      <p>{evolution.join(" → ")}</p>
      
    </div>
  );
  
}

export default PokemonDetail;
