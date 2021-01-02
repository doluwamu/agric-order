import React from "react";

export const RequiredField = () => {
  return <span>This field is required!</span>;
};

export const MinLength = ({ num }) => {
  return <span>Too short, minimum number of characters is {`${num}`}!</span>;
};
