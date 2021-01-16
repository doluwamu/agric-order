/*eslint-disable  jsx-a11y/anchor-is-valid */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { capitalize } from "helpers/Capitalize";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = ({ isAuthenticated, username, logout, cartItems }) => {
  const history = useHistory();

  const toggleAside = () => {
    document.querySelector(".nav-ul").classList.toggle("open");
  };
  const removeAside = () => {
    document.querySelector(".nav-ul").classList.remove("open");
  };

  const logOut = () => {
    const permission = window.confirm("Are you sure you want to sign out?");
    if (!permission) return;

    logout();
    return history.push("/logout");
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

        {isAuthenticated && (
          <>
            <li className="nav_li" onClick={logOut}>
              <p className="logout_text">Log-out</p>
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
