import React from 'react';

function ExpandedContent({ pokemon, onClose }) {
  const apiUrl = pokemon.url;
  let pokemonDetails;
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
    pokemonDetails = data;
    console.log("pokemon data in expanded content "+pokemonDetails);
  })
  .catch(error => {
    console.error(error);
  });

  return (
    pokemonDetails &&
    <div className="expanded-content">
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.image} alt={pokemon.name} />
      <p>Type: {pokemonDetails.type}</p>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ExpandedContent;
