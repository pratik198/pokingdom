import React from 'react';

function ExpandedContent({ pokemon, onClose }) {

  const apiUrl = pokemon.url;

// Use the fetch function to make a GET request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      return response;
    } else {
      throw new Error('Failed to fetch data from the API');
    }
  })
  .then(data => {
    console.log("pokemon data in expanded content "+data);

  })
  .catch(error => {
    console.error(error);
  });

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
