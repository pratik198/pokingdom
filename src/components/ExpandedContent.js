import React from 'react';

function ExpandedContent({ pokemon, onClose }) {
  return (
    <div className="expanded-content">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ExpandedContent;
