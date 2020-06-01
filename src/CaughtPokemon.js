// import React from "react";
import React, { useState } from "react";

// Exercise C
// 1. Open the pokedex React application and open the CaughtPokemon.js file.
// 2. Create a new state variable called totalCaught and initialise it to 0
//state variable  =  const [count, setCount] = useState(0);
// 3. When you create the totalCaught state, you should also set the function that will update this state (hint: refer to the syntax of the useState hook).
// 4. Replace the number 0 in the JSX with your new totalCaught state.

// function Counter() {
//   const [count, setCount] = useState(0);
//   ...
// }

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  const [totalCaught, setTotalCaught] = useState(0);

  function incrementPokemon() {
    setTotalCaught(totalCaught + 1);
  }
  return (
    <div>
      <p>
        Caught {totalCaught} Pokemon on {date};
      </p>
      <button onClick={incrementPokemon}>Catch Pokemon</button>
    </div>
  );
}

export default CaughtPokemon;
