/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { isAuthenticated, username, logout } = this.props;

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
              <p className="user" disabled>
                <div style={{ paddingBottom: "3px" }}>Welcome:</div>{" "}
                <div>{username}</div>
              </p>
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
            <li className="nav_li" onClick={logout}>
              <h3 style={{ color: "#fff" }}>Log-out</h3>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated, username } }) => {
  return {
    isAuthenticated,
    username,
  };
};

export default connect(mapStateToProps)(NavBar);
