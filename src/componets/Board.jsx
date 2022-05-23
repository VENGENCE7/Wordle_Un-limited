import Tile from "./Tile";
import "../styles/Board.css";

function Board() {
  return (
    <div className="board-container">
      <div className="board slide-in-blurred-bl">
        <div className="row">
          <Tile attemptVal={0} letterPos={0} />
          <Tile attemptVal={0} letterPos={1} />
          <Tile attemptVal={0} letterPos={2} />
          <Tile attemptVal={0} letterPos={3} />
          <Tile attemptVal={0} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={1} letterPos={0} />
          <Tile attemptVal={1} letterPos={1} />
          <Tile attemptVal={1} letterPos={2} />
          <Tile attemptVal={1} letterPos={3} />
          <Tile attemptVal={1} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={2} letterPos={0} />
          <Tile attemptVal={2} letterPos={1} />
          <Tile attemptVal={2} letterPos={2} />
          <Tile attemptVal={2} letterPos={3} />
          <Tile attemptVal={2} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={3} letterPos={0} />
          <Tile attemptVal={3} letterPos={1} />
          <Tile attemptVal={3} letterPos={2} />
          <Tile attemptVal={3} letterPos={3} />
          <Tile attemptVal={3} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={4} letterPos={0} />
          <Tile attemptVal={4} letterPos={1} />
          <Tile attemptVal={4} letterPos={2} />
          <Tile attemptVal={4} letterPos={3} />
          <Tile attemptVal={4} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={5} letterPos={0} />
          <Tile attemptVal={5} letterPos={1} />
          <Tile attemptVal={5} letterPos={2} />
          <Tile attemptVal={5} letterPos={3} />
          <Tile attemptVal={5} letterPos={4} />
        </div>
      </div>
    </div>
  );
}

export default Board;
