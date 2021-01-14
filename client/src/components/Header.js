import React from "react";
import "../style/header.css";


function Header() {
  return (
    <div>
      <div className="try">
        <div>
          <a href="/home" className="header-text">
            Home
          </a>
          <a href="/quiz" className="header-text">
            Quiz
          </a>
          <a href="/Forum" className="header-text">
            Forum
          </a>
          <a href="/About" className="header-text">
            About us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
