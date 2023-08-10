'use client'
import api from '@/services/api';
import React, { useState } from 'react';
import './Search.css'

const PokemonSearch = ({ setSearchResult }: any) => { // Accept setSearchResult as prop
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    if (pokemonName) {
      const response = await api.get(`/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.data;
      setPokemonData(data);
      setSearchResult(data); // Set search result in Home component
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PokemonSearch;
