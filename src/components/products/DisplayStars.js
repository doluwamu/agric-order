import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DisplayStars = ({ likes }) => {
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div>
      {likes > 0 && likes <= 200 && (
        <span role="img" aria-label="stars">
          {star}
        </span>
      )}
      {likes > 200 && likes <= 400 && (
        <span role="img" aria-label="stars">
          {star} {star}
        </span>
      )}
      {likes > 400 && likes <= 550 && (
        <span role="img" aria-label="stars">
          {star} {star} {star}
        </span>
      )}
      {likes > 550 && likes <= 800 && (
        <span role="img" aria-label="stars">
          {star} {star} {star} {star}
        </span>
      )}
      {likes > 800 && (
        <span role="img" aria-label="stars">
          {star} {star} {star} {star} {star}
        </span>
      )}
    </div>
  );
};

export default DisplayStars;
