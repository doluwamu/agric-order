import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DisplayStars = ({ likes }) => {
  const star = <FontAwesomeIcon icon={faStar} />;
  const halfStar = <FontAwesomeIcon icon={faStarHalf} />;
  return (
    <div>
      {likes <= 20 && null}

      {likes > 20 && likes <= 200 && <span>{star}</span>}

      {likes > 200 && likes <= 250 && (
        <span>
          {star} {halfStar}
        </span>
      )}

      {likes > 250 && likes <= 400 && (
        <span>
          {star} {star}
        </span>
      )}

      {likes > 400 && likes <= 450 && (
        <span>
          {star} {star} {halfStar}
        </span>
      )}

      {likes > 450 && likes <= 550 && (
        <span>
          {star} {star} {star}
        </span>
      )}

      {likes > 550 && likes <= 650 && (
        <span>
          {star} {star} {star} {halfStar}
        </span>
      )}

      {likes > 650 && likes <= 800 && (
        <span>
          {star} {star} {star} {star}
        </span>
      )}

      {likes > 800 && likes <= 850 && (
        <span>
          {star} {star} {star} {star} {halfStar}
        </span>
      )}

      {likes > 850 && (
        <span>
          {star} {star} {star} {star} {star}
        </span>
      )}
    </div>
  );
};

export default DisplayStars;
