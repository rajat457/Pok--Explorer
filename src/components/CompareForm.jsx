// src/components/CompareForm.jsx
import React, { useState } from "react";
import "../styles/CompareForm.css";

function CompareForm({ onCompare }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (first && second) {
      onCompare(first.toLowerCase(), second.toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="compare-form">
      <input
        type="text"
        placeholder="First Pokémon"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second Pokémon"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <button className="compare-btn" onClick={handleCompare}>
        Compare
        </button>

    </form>
  );
}

export default CompareForm;
