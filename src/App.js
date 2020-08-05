import React from "react";
import "./App.css";
import Game from "./components/game/Game";

import tigersLogo from "./assets/images/tigersnopaw.jpg";
import cardinalsLogo from "./assets/images/cardinal.jpg";
import lionsLogo from "./assets/images/lions.jpg";
import bearsLogo from "./assets/images/bears.jpg";

function App() {
  const tigers = {
    name: "Tigers",
    logoSrc: tigersLogo,
  };

  const cardinals = {
    name: "Cardinals",
    logoSrc: cardinalsLogo,
  };

  const lions = {
    name: "Lions",
    logoSrc: lionsLogo,
  };

  const bears = {
    name: "Bears",
    logoSrc: bearsLogo,
  };
  return (
    <div className="App">
      <Game venue="Union 525 Gem" homeTeam={tigers} visitingTeam={cardinals} />
      <Game venue="Sheridan Arena" homeTeam={lions} visitingTeam={bears} />
    </div>
  );
}

export default App;
