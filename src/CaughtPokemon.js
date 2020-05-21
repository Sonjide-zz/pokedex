import React from 'react';


function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return (
    <div>
    <p>Caught 0 Pokemon on {date}</p>
    <p>Hello</p>
    </div>
  );
}

export default CaughtPokemon;
