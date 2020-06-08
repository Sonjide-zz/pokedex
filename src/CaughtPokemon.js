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
// 14: (STRETCH GOAL) Make sure the user cannot add a Pokemon to the caughtPokemon state if the value of pokemonNameInput state is empty.

// }

function CaughtPokemon(props) {
  const date = new Date().toLocaleDateString();
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [totalCaught, setTotalCaught] = useState([]);

  function catchPokemon() {
    if (pokemonNameInput.trim() !== "") {
      setTotalCaught(totalCaught.concat(pokemonNameInput));
    } else {
      //   alert("You must type your pokemon name here");
    }
    setPokemonNameInput("");
  }
  console.log(CaughtPokemon);

  function handleInputChange(event) {
    //console.log(event.target.value);
    setPokemonNameInput(event.target.value);
    //console.log("hello");
  }
  return (
    <div>
      <ul>
        {totalCaught.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
      <p>
        Caught {totalCaught.length} {props.score} Pokemon on {props.date}
        console.log(props.score)
      </p>
      <input
        value={pokemonNameInput}
        onChange={handleInputChange}
        type="text"
        placeholder="enter name of pokemon"
      ></input>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
}

export default CaughtPokemon;
