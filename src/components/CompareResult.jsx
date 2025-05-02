// src/components/CompareResult.jsx
import React from "react";
import "../styles/CompareResult.css";

function CompareResult({ pokemon1, pokemon2 }) {
  if (!pokemon1 || !pokemon2) return null;

  return (
    <div className="compare-result">
      <h2>Compare</h2>
      <div className="compare-container">
        <div className="pokemon">
          <h3>{pokemon1.name.charAt(0).toUpperCase() + pokemon1.name.slice(1)}</h3>
          <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
          <p>Type: {pokemon1.types.map(type => type.type.name).join(", ")}</p>
          <h4>Stats</h4>
          {pokemon1.stats.map((stat) => (
            <p key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>

        <div className="pokemon">
          <h3>{pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1)}</h3>
          <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
          <p>Type: {pokemon2.types.map(type => type.type.name).join(", ")}</p>
          <h4>Stats</h4>
          {pokemon2.stats.map((stat) => (
            <p key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompareResult;
