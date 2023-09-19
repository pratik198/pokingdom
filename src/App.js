import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

import PokemonThumbnail from './components/PokemonThumbnail';
import ExpandedContent from './components/ExpandedContent';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [expandedPokemon, setExpandedPokemon] = useState(null);

  useEffect(() => {
    // Fetch initial Pokemon data from the API and store it in state
    async function fetchPokemonData() {
      try {
        const response = await fetch('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
        const data = await response.json();
        console.log(data);
        //setPokemonData(data.results);
        setPokemonData(data[0].results);
        console.log("pokemon data"+pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);

      }
    }

    fetchPokemonData();
  }, []);

  const handleExpandClick = (pokemon) => {
    // Set the expandedPokemon state to display the ExpandedContent component
    setExpandedPokemon(pokemon);
  };

  const handleExpandClose = () => {
    // Close the ExpandedContent component
    setExpandedPokemon(null);
  };

  const loadMorePokemon = async () => {
    // Fetch more Pokemon data from the API and append it to the existing data
    // You will need to parse the 'next' URL from the API response to load more data
    try {
      // Make an API request and append new data to the existing pokemonData
    } catch (error) {
      console.error('Error loading more Pokemon data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon Kingdom</h1>
      <div className="pokemon-container">
        {pokemonData.map((pokemon) => (
          <PokemonThumbnail
            //key={pokemon.name}
            pokemon={pokemon}
            onExpandClick={handleExpandClick}
          />
        ))}
      </div>
      <button onClick={loadMorePokemon}>More Pokemons</button>
      {expandedPokemon && (
        <ExpandedContent
          pokemon={expandedPokemon}
          onClose={handleExpandClose}
        />
      )}
    </div>
  );
}

export default App;
