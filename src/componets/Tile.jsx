import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
// import { CheckStatus } from "./CheckStatus";
import "../styles/Tile.css";

function Tile(props) {
  const {
    board,
    correctWord,
    CurrAttempt,
    setDisabledLetters,
    setCorrectLetters,
    setAlmostLetters,
  } = useContext(AppContext);

  const letter = board[props.attemptVal][props.letterPos];

  // const avail = useCallback(CheckStatus(correctWord, letter));

  const correct = correctWord.toUpperCase()[props.letterPos] === letter;

  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const wrong = !correct && !almost && letter !== "";

  let letterState;

  letterState =
    CurrAttempt.attempt > props.attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && correct && !almost && !wrong) {
      setCorrectLetters((corr) => [...corr, letter]);
    }
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    if (letter !== "" && !correct && almost && !wrong) {
      setAlmostLetters((alm) => [...alm, letter]);
    } // eslint-disable-next-line
  }, [CurrAttempt.attempt]);

  if (letter === "") return <div className="tileEmpty">{letter}</div>;
  else {
    if (letterState === false)
      return <div className="tileFilled">{letter}</div>;
    if (letterState !== false) {
      return <div className={"tileFilled2 " + letterState}>{letter}</div>;
    }
  }
}

export default Tile;
