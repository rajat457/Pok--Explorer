import React from "react";
import logo from "../assets/pokeball.png"; // Put an image in /src/assets/

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} alt="Pokeball Logo" className="logo" />
        <h1>Poké-Explorer</h1>
      </div>
    </header>
  );
}

export default Header;
