import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogoutPage = () => {
  return (
    <div>
      <div
        className="logout__container"
        style={{
          margin: "8rem auto 0",
          maxWidth: "50rem",
          textAlign: "center",
          lineHeight: "4rem",
          padding: "1.5rem 0",
        }}
      >
        <h1>You have successfully logged out</h1>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "20px",
            fontWeight: "600",
            border: "1px solid #000",
            padding: "5px",
            borderRadius: "4px",
            background: "#000",
            color: "#fff",
          }}
        >
          Ok
        </Link>
      </div>
    </div>
  );
};

export default LogoutPage;
