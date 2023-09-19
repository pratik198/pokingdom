import React from 'react';

function PokemonThumbnail({ pokemon, onExpandClick }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      <button onClick={() => onExpandClick(pokemon)}>Know more...</button>
    </div>
  );
}

export default PokemonThumbnail;
