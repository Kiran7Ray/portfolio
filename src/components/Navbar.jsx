import "../styles/navbar.css";
import "../styles/global.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="navbar_content">
      <div className="title_menu">
        <h2 className="title">Kiran</h2>
      </div>
      <div className="list_menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Skills</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
