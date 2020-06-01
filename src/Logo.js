import React from "react";

// Exercise B
// 1. Open the pokedex React application and open the Logo.js file.
// 2. Copy and paste the logWhenClicked function from the Logo component to the App component.
// 3. Pass the logWhenClicked function reference as a prop to the Logo component. (Hint: look at the ClickLoggerApp component above for an example).
// 4. In the Logo component change the onClick prop so that it passes props.handleClick. (Hint: look at the FancyButton component above for an example).
// 5. In a group of 2 - 3 students, discuss what you think will happen when you click the logo image now. Can you explain why?
// 6. Report back to the rest of the class what you thought was going to happen and why.

function Logo(props) {
  function logWhenClicked() {
    //console.log("buttonElement was clicked!");
  }
  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  );
}

export default Logo;
