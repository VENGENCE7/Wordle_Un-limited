import React from "react";
import "../styles/Nav.css";

function Nav() {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <nav className="Nav">
      <div className="title slide-in-blurred-top" onClick={refreshPage}>
        WorDLe&ensp;|_|nLimiTe|]
      </div>
    </nav>
  );
}

export default Nav;
