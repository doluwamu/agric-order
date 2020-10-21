/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const toggleAside = () => {
      document.querySelector(".nav-ul").classList.toggle("open");
    };
    return (
      <nav className="nav-section">
        <header className="nav_header">
          <Link to="/">AgricOrder</Link>
        </header>

        <button className="nav-btn" onClick={toggleAside}>
          &#9776;
        </button>

        <ul className="nav-ul" onClick={toggleAside}>
          {/* <li className="nav_li">
            <p className="user" disabled>
              Welcome User
            </p>
          </li> */}
          <li className="nav_li">
            <a href="#">Home</a>
          </li>
          <li className="nav_li">
            <a href="#">About</a>
          </li>
          <li className="nav_li">
            <Link to="/">Products</Link>
          </li>
          <li className="nav_li">
            <a href="#">Contact</a>
          </li>
          <li className="nav_li">
            <Link to="/signup">Sign-up</Link>
          </li>
          <li className="nav_li">
            <Link to="/login">Log-in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
