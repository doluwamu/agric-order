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
    // document.querySelector(".nav-ul").classList.toggle()
  };
  const closeAside = () => {
    document.querySelector(".nav-ul").classList.remove("open");
  };

  const logOut = () => {
    logout();
    return history.push("/login");
  };
  return (
    <nav className="nav-section">
      <header className="nav_header">
        <Link to="/products">AgricOrder</Link>
      </header>

      <button className="nav-btn" onClick={toggleAside}>
        &#9776;
      </button>

      <ul className="nav-ul" onClick={closeAside}>
        {isAuthenticated && (
          <li className="nav_li">
            <div className="user" style={{ color: "#fff" }}>
              <div style={{ paddingBottom: "3px" }}>Welcome:</div>{" "}
              <div style={{ paddingTop: "3px" }}>{capitalize(username)}</div>
            </div>
          </li>
        )}

        <li className="nav_li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav_li">
          <a href="#">About</a>
        </li>
        <li className="nav_li">
          <Link to="/products">Products</Link>
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

            <li className="nav_li" onClick={() => history.push("/login")}>
              <p title="Please login to view your cart" className="logout_text">
                Cart{" "}
                <span
                  style={{
                    background: "#000",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                >
                  0
                </span>
              </p>
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li className="nav_li" onClick={logOut}>
              <p className="logout_text">Logout</p>
            </li>

            <li className="nav_li">
              <Link to="/cart" className="cart_text">
                Cart{" "}
                <span
                  style={{
                    background: "#000",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {cartItems &&
                    cartItems.reduce(
                      (a, c) => parseInt(a) + parseInt(c.qty),
                      0
                    )}
                </span>
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
