import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Compare.css";

function Compare() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);

  // Fetch all Pokémon names once
  useEffect(() => {
    const fetchAllPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
      setAllPokemon(res.data.results.map(p => p.name));
    };
    fetchAllPokemon();
  }, []);

  const handleCompare = async () => {
    try {
      const [res1, res2] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${first.toLowerCase()}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${second.toLowerCase()}`),
      ]);
      setPokemon1(res1.data);
      setPokemon2(res2.data);
    } catch {
      alert("One or both Pokémon names are invalid.");
    }
  };

  // Filter suggestions based on input
  const handleInputChange = (setter, value, setSuggestions) => {
    setter(value);
    const filtered = allPokemon.filter(name => name.startsWith(value.toLowerCase())).slice(0, 5);
    setSuggestions(filtered);
  };

  return (
    <div className="compare-container">
      <h1>Compare Pokémon</h1>
      <div className="input-group">
        <div className="input-wrapper">
          <input
            value={first}
            onChange={(e) => handleInputChange(setFirst, e.target.value, setSuggestions1)}
            placeholder="First Pokémon"
          />
          {suggestions1.length > 0 && (
            <ul className="suggestions">
              {suggestions1.map(name => (
                <li key={name} onClick={() => {
                  setFirst(name);
                  setSuggestions1([]);
                }}>{name}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="input-wrapper">
          <input
            value={second}
            onChange={(e) => handleInputChange(setSecond, e.target.value, setSuggestions2)}
            placeholder="Second Pokémon"
          />
          {suggestions2.length > 0 && (
            <ul className="suggestions">
              {suggestions2.map(name => (
                <li key={name} onClick={() => {
                  setSecond(name);
                  setSuggestions2([]);
                }}>{name}</li>
              ))}
            </ul>
          )}
        </div>

        <button onClick={handleCompare} className="compare-btn">Compare</button>
      </div>

      {pokemon1 && pokemon2 && (
        <div className="compare-results">
          {[pokemon1, pokemon2].map((pokemon, i) => (
            <div key={i} className="pokemon-box">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p className="type">Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
              <h4>Stats</h4>
              {pokemon.stats.map((s) => (
                <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Compare;
