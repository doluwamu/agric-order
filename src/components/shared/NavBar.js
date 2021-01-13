/*eslint-disable  jsx-a11y/anchor-is-valid */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { capitalize } from "helpers/Capitalize";

const NavBar = ({ isAuthenticated, username, logout, cartItems }) => {
  const toggleAside = () => {
    document.querySelector(".nav-ul").classList.toggle("open");
  };
  const removeAside = () => {
    document.querySelector(".nav-ul").classList.remove("open");
  };
  return (
    <nav className="nav-section">
      <header className="nav_header">
        <Link to="/">AgricOrder</Link>
      </header>

      <button className="nav-btn" onClick={toggleAside}>
        &#9776;
      </button>

      <ul className="nav-ul" onClick={removeAside}>
        {isAuthenticated && (
          <li className="nav_li">
            <div className="user" style={{ color: "#fff" }}>
              <div style={{ paddingBottom: "3px" }}>Welcome:</div>{" "}
              <div style={{ paddingTop: "3px" }}>{capitalize(username)}</div>
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
          <>
            <li className="nav_li">
              <Link to="/cart" className="logout_text">
                Cart{" "}
                <span
                  style={{
                    background: "#000",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li className="nav_li" onClick={logout}>
              <Link
                to="/logout/35tve6gybbreg7greuyguyf7grggter7gfd87greugerg867ye"
                className="logout_text"
              >
                Log-out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({
  auth: { isAuthenticated, username },
  cart: { cartItems },
}) => {
  // debugger;
  return {
    isAuthenticated,
    username,
    cartItems,
  };
};

export default connect(mapStateToProps)(NavBar);
