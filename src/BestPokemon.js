import React, { useState, useEffect } from "react";

//new BestPokemonFetcher component, create a new state variable called bestPokemon and initialise it to null.
function BestPokemonFetcher() {
  const [bestPokemon, setBestPokemon] = useState(null);
  //useEffect callback, call the fetch function with this URL:
  useEffect(() => {
    //link is fetching the data from the Api
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      //the 1st.then is converts the response from JSON
      .then((res) => res.json())
      //second .then handler after the one we just added, where the callback function will receive an argument called data.
      .then((data) => {
        setBestPokemon(data);
        // Inspect the data in the dev tools console
        console.log(data);
      });
  }, []);
  //change this if/else statement using a ternary operator follows this structure condition ? output1 : output2
  //   if (!bestPokemon) {
  //     return null;
  //   } else {
  //     return <BestPokemon pokemon={bestPokemon} />;
  //   }
  // }
  //ternary operator follows this structure condition ? output1 : output2
  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
}
function BestPokemon(props) {
  return (
    <div>
      <p>
        <strong>Which is your favourite Pokemon?</strong>
      </p>
      <ul>
        {props.pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemonFetcher;
