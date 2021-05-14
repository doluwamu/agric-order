import React from "react";

const AlertErrors = ({ error, setOpenError, marginLeft }) => {
  return (
    <div className="alert alert-danger">
      <b>{error}</b>
      <span
        style={{ marginLeft, cursor: "pointer" }}
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
