import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/global.css";

function Navbar() {
  return (
    <nav className="navbar_content">
      <div className="title_menu">
        <Link to="/" className="title_link">
          <h2 className="title">Kiran</h2>
        </Link>
      </div>
      <div className="list_menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
