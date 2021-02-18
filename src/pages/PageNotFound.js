import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "10rem 0",
          background: "black",
          margin: "100px auto 0",
          color: "#fff",
          maxWidth: "800px",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ padding: "10px" }}>Page not found</h2>
        <h3>Ooops, this page you are looking for doesn't exist.</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
