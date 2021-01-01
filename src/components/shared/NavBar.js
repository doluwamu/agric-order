/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = ({ isAuthenticated, username, logout }) => {
  const logOut = () => {
    const shouldLogOut = window.confirm("Do you want to log out?");
    if (!shouldLogOut) {
      return;
    }
    return logout;
  };

  // const

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
        {isAuthenticated && (
          <li className="nav_li">
            <div className="user" style={{ color: "#fff" }}>
              <div style={{ paddingBottom: "3px" }}>Welcome:</div>{" "}
              <div style={{ paddingTop: "3px" }}>{username}</div>
            </div>
          </li>
        )}

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
        {!isAuthenticated && (
          <>
            <li className="nav_li">
              <Link to="/signup">Sign-up</Link>
            </li>
            <li className="nav_li">
              <Link to="/login">Log-in</Link>
            </li>
          </>
        )}

        {isAuthenticated && (
          <li className="nav_li" onClick={logOut}>
            {logout && (
              <Link
                to="/logout/35tve6gybbreg7greuyguyf7grggter7gfd87greugerg867ye"
                className="logout_text"
              >
                Log-out
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ auth: { isAuthenticated, username } }) => {
  return {
    isAuthenticated,
    username,
  };
};

export default connect(mapStateToProps)(NavBar);
