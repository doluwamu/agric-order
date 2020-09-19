/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const closeNav = () => {
      document.querySelector(".aside").classList.remove("open");
      document.querySelector(".cancel-icon").style.display = "none";

      document.querySelector(".nav-btn").style.opacity = "1";
    };

    const openNav = () => {
      document.querySelector(".aside").classList.add("open");
      document.querySelector(".cancel-icon").style.display = "block";
      document.querySelector(".nav-btn").style.opacity = "0";
    };
    return (
      <div className="all-nav">
        {/* Nav bar starts */}
        <nav className="nav-section">
          <header className="nav_header">
            <Link to="/">AgricOrder</Link>
          </header>

          <h2 className="cancel-icon" onClick={closeNav}>
            X
          </h2>
          <ul className="nav-ul">
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
              <Link to="/login">SignIn</Link>
            </li>
          </ul>
          <button className="nav-btn" onClick={openNav}>
            &#9776;
          </button>
        </nav>

        <aside className="aside">
          <h4 className="aside_link_text">
            <Link to="/" className="Link">
              <h4 className="aside_link">Home</h4>
            </Link>
          </h4>
          <h4 className="aside_link_text">
            <Link to="/" className="Link">
              <h4 className="aside_link">About</h4>
            </Link>
          </h4>
          <h4 className="aside_link_text">
            <Link to="/" className="Link">
              <h4 className="aside_link">Products</h4>
            </Link>
          </h4>
          <h4 className="aside_link_text">
            <Link to="/" className="Link">
              <h4 className="aside_link">Contact</h4>
            </Link>
          </h4>
          <h4 className="aside_link_text">
            <Link to="/login" className="Link">
              <h4 className="aside_link">SignIn</h4>
            </Link>
          </h4>
        </aside>
        {/* Nav bar ends */}
      </div>
    );
  }
}

export default NavBar;
