import React, { createContext } from "react";
import jwt from "jsonwebtoken";
import moment from "moment";
import { userLoggedIn, userLogin } from "actions";
import { connect } from "react-redux";

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {
  const checkUserAuthentication = () => {};

  const getToken = () => {
    return localStorage.getItem("login_token");
  };

  const tokenExpiration = (token) => {
    const decodedToken = decodeToken(token);
    return decodeToken.exp;
  };

  const isTokenValid = (token) => {
    return moment().isBefore(tokenExpiration(token));
  };

  const logIn = (loginData) => {
    return userLogin(loginData).then((token) => {
      localStorage.setItem("login_token", token);
      const decodedToken = decodeToken(token);
      dispatch(userLoggedIn(decodedToken));
      return token;
    });
  };

  const decodeToken = (token) => {
    return jwt.decode(token);
  };

  const authApi = {
    logIn,
    checkUserAuthentication,
  };

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

export const AuthProvider = connect()(AuthBaseProvider);

export const withAuth = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(authApi) => <Component {...props} auth={authApi} />}
    </AuthContext.Consumer>
  );
};

// export const withAuth = (Component) => {
//   return (props) => (
//     <AuthContext.Consumer>
//       {(authApi) => <Component {...props} auth={authApi} />}
//     </AuthContext.Consumer>
//   );
// };
