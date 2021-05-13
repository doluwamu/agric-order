import React from "react";

const AlertErrors = ({ error, setOpenQtyError }) => {
  return (
    <div className="alert alert-danger">
      <b>{error}</b>
      <span
        style={{ marginLeft: "50%", cursor: "pointer" }}
        onClick={() => {
          setOpenQtyError(false);
        }}
      >
        x
      </span>
    </div>
  );
};

export default AlertErrors;
