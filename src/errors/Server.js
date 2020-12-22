import React from "react";

export const ServerError = ({ error }) => {
  return (
    <div>
      {error &&
        error.length > 0 &&
        error.map((e) => {
          return (
            <div className="alert alert-danger" key={e.title}>
              <span>{e.detail}</span>
            </div>
          );
        })}
    </div>
  );
};
