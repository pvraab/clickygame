import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">{props.navMessage}</li>
        <li>Score:<span> {props.score}</span> | Top Score:<span> {props.topscore}</span></li>
      </ul>
    </nav>
  );
}

export default NavBar;
