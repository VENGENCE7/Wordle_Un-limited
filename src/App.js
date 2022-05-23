import "./styles/App.css";
import Board from "./componets/Board";
import Keyboard from "./componets/Keyboard";
import React, { useEffect, useState, createContext } from "react";
import { emptyBoard, generateWordSet } from "./componets/WordleSet";
import Alert from "./componets/Alert";
import GameOver from "./componets/GameOver";
import GameStatistics from "./componets/GameStatistics";

export const AppContext = createContext();

function App() {
  // Board & Tile values
  const [board, setBoard] = useState(emptyBoard);
  const [CurrAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  // Word dictionary
  const [wordSet, setWordSet] = useState(new Set());
  // Guessed letters
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  // gameEnd
  const [gameOver, setGameOver] = useState({ gameEnd: false, guessed: false });
  // Correct guess
  const [correctWord, setCorrectWord] = useState("");
  // alert message
  const [alertMessage, setAlertMessage] = useState("");
  // alert condition
  const [showAlert, setShowAlert] = useState(false);
  // game condition
  const [newGame, setNewGame] = useState();
  // Game Stats
  const [winStreak, setWinStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const [score, setScore] = useState(0);

  // for local storage
  let gameStats = {
    stat_gamesWon: gamesWon,
    stat_gamesPlayed: gamesPlayed,
    stat_winStreak: winStreak,
    stat_maxStreak: maxStreak,
    stat_score: score,
  };

  // retrieve Local Storage

  useEffect(() => {
    const retrieved_stats = window.localStorage.getItem("STATS");
    gameStats =
      // eslint-disable-next-line
      retrieved_stats !== null || {} ? JSON.parse(retrieved_stats) : [];
    if (gameStats !== null) {
      setWinStreak(gameStats.stat_winStreak);
      setMaxStreak(gameStats.stat_maxStreak);
      setGamesPlayed(gameStats.stat_gamesPlayed);
      setGamesWon(gameStats.stat_gamesWon);
      setScore(gameStats.stat_score);
    }
  }, []);

  //  set local Storage
  useEffect(() => {
    window.localStorage.setItem("STATS", JSON.stringify(gameStats));
    // eslint-disable-next-line
  }, [gamesPlayed]);

  // assign dictionary and correctWord
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.WordSet);
      setCorrectWord(words.wordoftheday);
      setNewGame(false);
    });
  }, [newGame]);

  // alert timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [showAlert]);

  // play the game again
  const playAgain = () => {
    const newBoard = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];
    setBoard(newBoard);
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setDisabledLetters([]);
    setCorrectLetters([]);
    setAlmostLetters([]);
    setGameOver({ gameEnd: false, guessed: false });
    setAlertMessage("");
  };

  const onSelect = (keyVal) => {
    if (gameOver.gameEnd === true) return;
    if (CurrAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...CurrAttempt, letterPos: CurrAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (gameOver.gameEnd === true) return;
    if (CurrAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...CurrAttempt, letterPos: CurrAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    // Game Condition
    if (gameOver.gameEnd === true) {
      setNewGame(true);
      playAgain();
    }

    // Board-Row Condition
    if (CurrAttempt.letterPos <= 4 && CurrAttempt.letterPos > 0) {
      setAlertMessage("Not Enough Letters :(");
      setShowAlert(true);
    }

    if (CurrAttempt.letterPos !== 5) return;
    // Gather user Input
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[CurrAttempt.attempt][i];
    }

    // checking if word is present in wordBank
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: CurrAttempt.attempt + 1, letterPos: 0 });
    } else {
      setAlertMessage("Word Not in DicTionarY  :( ");
      setShowAlert(true);
    }

    // Result Condition
    // guessed correct
    if (
      currWord.toUpperCase() === correctWord.toUpperCase() &&
      wordSet.has(currWord.toLowerCase())
    ) {
      setTimeout(() => {
        setGameOver({ gameEnd: true, guessed: true });
        // update stats
        setWinStreak(winStreak + 1);
        setGamesWon(gamesWon + 1);
        setGamesPlayed(gamesPlayed + 1);
        setAlertMessage("CongraTulaTionS :) ");
        if (winStreak > maxStreak) {
          // update maxx streak
          setMaxStreak(winStreak);
          setAlertMessage(
            "+_+ !! ConGraTulaTionS,You Have SeT A New Personal Record !! *_* "
          );
        }
      }, 1860);
      return;
    }

    //  guess wrong
    if (CurrAttempt.attempt === 5 && wordSet.has(currWord.toLowerCase())) {
      setTimeout(() => {
        setGameOver({ gameEnd: true, guessed: false });
        // update winstreak
        setWinStreak(0);
        setGamesPlayed(gamesPlayed + 1);
        if (winStreak > maxStreak) setMaxStreak(winStreak);
        setShowAlert(true);
      }, 1850);
      setAlertMessage("HarD LucK BuddY :( ");
      return;
    }
  };

  return (
    <div className="App">
      <nav className="Nav">
        <h1 className="slide-in-blurred-top">
          {" "}
          <div className="title"> WorDLe&ensp;|_|nLimiTe|] </div>
        </h1>
      </nav>
      <GameStatistics
        wins={gamesWon}
        streak={winStreak}
        played={gamesPlayed}
        max={maxStreak}
      />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          CurrAttempt,
          setCurrAttempt,
          correctWord,
          onSelect,
          onDelete,
          onEnter,
          gameOver,
          disabledLetters,
          setDisabledLetters,
          correctLetters,
          setCorrectLetters,
          almostLetters,
          setAlmostLetters,
        }}
      >
        {gameOver.gameEnd ? (
          <GameOver message={alertMessage} />
        ) : showAlert ? (
          <Alert message={alertMessage} />
        ) : null}
        <div className="game">
          <div className="game-container">
            <Board />
            <Keyboard />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;