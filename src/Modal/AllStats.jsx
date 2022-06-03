import React, { useContext } from "react";
import { ModalContext } from "./Modal";
import WordleStats from "./WordleStats";
import "./AllStats.css";

function AllStats() {
  const { allstats } = useContext(ModalContext);

  const guessRate =
    allstats.stat_gamesPlayed !== 0
      ? ((allstats.stat_gamesWon / allstats.stat_gamesPlayed) * 100).toFixed(3)
      : 0;

  const oneRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.one / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;
  const twoRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.two / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;
  const threeRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.three / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;
  const fourRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.four / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;
  const fiveRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.five / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;
  const sixRate =
    allstats.stat_attemptstats.one !== null
      ? (
          (allstats.stat_attemptstats.six / allstats.stat_gamesWon) *
          100
        ).toFixed(2)
      : 0;

  return (
    <div className="Allstats-container">
      <span className="Allstats-heading">Game</span>
      <div className="Allstats-line">
        <WordleStats title="Played" value={allstats.stat_gamesPlayed} />
        <WordleStats title="Won" value={allstats.stat_gamesWon} />
        <WordleStats
          title="Lost"
          value={allstats.stat_gamesPlayed - allstats.stat_gamesWon}
        />
      </div>
      <span className="Allstats-heading">Streak</span>
      <div className="Allstats-line">
        <WordleStats title="Current" value={allstats.stat_winStreak} />
        <WordleStats title="Max" value={allstats.stat_maxStreak} />
      </div>
      <span className="Allstats-heading">SCORE</span>
      <span className="Allstats-Score">{allstats.stat_score}</span>
      <span className="Allstats-heading">Guesses</span>
      <div className="Allstats-line">
        <WordleStats title="One" value={allstats.stat_attemptstats.one} />
        <WordleStats title="Two" value={allstats.stat_attemptstats.two} />
      </div>
      <div className="Allstats-line">
        <WordleStats title="Three" value={allstats.stat_attemptstats.three} />
        <WordleStats title="Four" value={allstats.stat_attemptstats.four} />
        <WordleStats title="Five" value={allstats.stat_attemptstats.five} />
        <WordleStats title="Six" value={allstats.stat_attemptstats.six} />
      </div>
      <span className="Allstats-heading">Guessing %</span>
      <div className="Allstats-line">
        <WordleStats title="Avg" value={guessRate} />
      </div>
      <div className="Allstats-line">
        <WordleStats title="One" value={oneRate} />
        <WordleStats title="Two" value={twoRate} />
        <WordleStats title="Three" value={threeRate} />
      </div>
      <div className="Allstats-line">
        <WordleStats title="Four" value={fourRate} />
        <WordleStats title="Five" value={fiveRate} />
      </div>
      <div className="Allstats-line">
        <WordleStats title="Six" value={sixRate} />
      </div>
    </div>
  );
}

export default AllStats;

// stat_attemptstats: {one: 1, four: 2, two: 4, three: 1}
// stat_gamesPlayed: 176
// stat_gamesWon: 148
// stat_maxStreak: 36
// stat_score: 876
// stat_winStreak: 37

// value={allstats.stat_attemptstats.one}
// value={allstats.stat_gamesWon}
