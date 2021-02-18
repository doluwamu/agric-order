import React from "react";

const HeadImage = ({ heading }) => {
  return (
    <div className="main-bg-img">
      <div className="bg-texts">
        <h1 className="main-bg-text one">Welcome to AgricOrder</h1>
        <h2 className="main-bg-text two">{heading || ""}</h2>
      </div>
    </div>
  );
};

export default HeadImage;
