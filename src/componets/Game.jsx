import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import "../styles/Game.css";

function Game() {
  return (
    <div className="game">
      <div className="game-container">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default Game;
