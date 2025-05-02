import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import LoadingSpinner from "../components/LoadingSpinner";
import "../App.css";

function MainPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const results = await Promise.all(
          res.data.results.map((pokemon) => axios.get(pokemon.url))
        );
        const detailed = results.map((res) => res.data);
        setPokemonList(detailed);
        setFilteredList(detailed);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    const fetchTypes = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(res.data.results.map((t) => t.name));
    };

    fetchData();
    fetchTypes();
  }, []);

  useEffect(() => {
    let filtered = [...pokemonList];

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((p) =>
        p.types.some((t) => t.type.name === selectedType)
      );
    }

    if (sortOrder === "id") {
      filtered.sort((a, b) => a.id - b.id);
    } else if (sortOrder === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredList(filtered);
  }, [searchTerm, selectedType, pokemonList, sortOrder]);

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemonList = filteredList.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="App">
      <Header />
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
        <div className="sorting">
          <label>Sort by:</label>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : currentPokemonList.length === 0 ? (
        <p>No Pokémon found.</p>
      ) : (
        <div className="pokemon-list">
          {currentPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {pageNumbers.map((num) => (
          <button key={num} onClick={() => setCurrentPage(num)} className={currentPage === num ? "active" : ""}>
            {num}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageNumbers.length}>Next</button>

        <select onChange={(e) => setItemsPerPage(Number(e.target.value))} value={itemsPerPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}

export default MainPage;
