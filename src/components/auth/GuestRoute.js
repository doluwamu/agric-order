import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "services/AuthService";

const GuestRoute = ({ children, ...rest }) => {
  const authService = useAuth();

  const child = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        !authService.isAuthenticated() ? (
          React.cloneElement(child, { ...rest, ...props })
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default GuestRoute;
