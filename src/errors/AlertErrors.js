import React from "react";

const AlertErrors = ({ error, setOpenError }) => {
  return (
    <div className="alert alert-danger">
      <b>{error}</b>
      <span
        style={{ marginLeft: "50%", cursor: "pointer" }}
        onClick={() => {
          setOpenError(false);
        }}
      >
        x
      </span>
    </div>
  );
};

export default AlertErrors;
