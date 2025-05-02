import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
