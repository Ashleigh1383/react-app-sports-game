import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import tigers from "./assets/images/tigersnopaw.jpg";
// import cardinals from "./assets/images/cardinal.jpg";
// import lions from "./assets/images/lions.jpg";
// import bears from "./assets/images/bears.jpg";

function App() {
  const tigers = {
    name: "Tigers",
    logoSrc: "tigers",
  };

  const cardinals = {
    name: "Cardinals",
    logoSrc: "cardinals",
  };

  const lions = {
    name: "Lions",
    logoSrc: "lions",
  };

  const bears = {
    name: "Bears",
    logoSrc: "bears",
  };

  return (
    <div className="App">
      <Game venue="Union 525 Gem" homeTeam={tigers} visitingTeam={cardinals} />
      <Game venue="Sheridan Arena" homeTeam={lions} visitingTeam={bears} />
    </div>
  );
}

export default App;
