import React from 'react';

function BestPokemon(props) {
  return (
    <div>
      <p><strong>Which is your favourite Pokemon?</strong></p>
      <ul>{props.abilities.map((ability, index) => (
        <li key={index}>{ability} </li>
      ))}</ul>
    </div>
  );
}

export default BestPokemon;