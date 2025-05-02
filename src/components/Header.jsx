import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Header.css";
import logo from "../assets/pokeball.png"; // Put an image in /src/assets/

function Header() {
  const navigate = useNavigate();

  const handleRandomClick = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      navigate(`/pokemon/${res.data.name}`);
    } catch (err) {
      alert("Could not load random Pokémon.");
    }
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} alt="Pokeball Logo" className="logo" />
        <h1>Poké-Explorer</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/compare">Compare</Link></li>
          <li><button onClick={handleRandomClick} className="random-btn">🎲 Random</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
