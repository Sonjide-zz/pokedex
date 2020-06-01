import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function logWhenClicked() {
    console.log("buttonElement was clicked!");
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon />
    </div>
  );
}

export default App;

//prop format as in syllabus https://syllabus.codeyourfuture.io/react/week-1/lesson.html
