import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PokemonDetail from "./pages/PokemonDetail";
import Compare from "./pages/Compare";
import Favorites from "./pages/Favorites"; // Optional if you added it
import Header from "./components/Header";
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Header /> {/* Always visible on every page */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<Compare />} />
         {/* Optional */}
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
