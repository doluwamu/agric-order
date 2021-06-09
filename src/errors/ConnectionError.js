import React from "react";

const ConnectionError = () => {
  return (
    <div style={{ marginTop: "150px", textAlign: "center" }}>
      <h2>Ooops, something went wrong!!!</h2>
      <h3 style={{ marginTop: "15px" }}>
        Check your internet connection or reload the page
      </h3>
      <div style={{ marginTop: "1rem" }}>
        <button
          className="btn btn-secondary"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default ConnectionError;
