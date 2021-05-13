import React from "react";

const AlertErrors = ({ error }) => {
  return (
    <div className="alert alert-danger">
      <b>{error}</b>
    </div>
  );
};

export default AlertErrors;
