import React from "react";
import Spinner from "components/shared/Spinner";

const Loading = () => {
  return (
    <div style={{ marginTop: "10%", marginLeft: "30%" }}>
      <Spinner />
      <h2 style={{ marginTop: "5px" }}>Please wait...</h2>
    </div>
  );
};

export default Loading;
