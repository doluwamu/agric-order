import React, { createContext, useContext } from "react";
import jwt from "jsonwebtoken";
import moment from "moment";
import { userLoggedIn, userLogin } from "actions";
import { connect } from "react-redux";

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {
  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    return decodedToken && isTokenValid(decodedToken);
  };

  const logOut = () => {
    localStorage.removeItem("ag_login_token");
    dispatch({
      type: "USER_LOGGED_OUT",
    });
  };

  const checkUserAuthentication = () => {
    const decodedToken = decodeToken(getToken());

    if (decodedToken && moment().isBefore(tokenExpiration(decodedToken))) {
      dispatch(userLoggedIn(decodedToken));
    }
  };

  const getToken = () => {
    return localStorage.getItem("ag_login_token");
  };

  const tokenExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  };

  const isTokenValid = (decodedToken) => {
    return decodedToken && moment().isBefore(tokenExpiration(decodedToken));
  };

  const logIn = (loginData) => {
    return userLogin(loginData).then((token) => {
      localStorage.setItem("ag_login_token", token);
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
    logOut,
    isAuthenticated,
    getToken,
  };

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const withAuth = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(authApi) => <Component {...props} auth={authApi} />}
    </AuthContext.Consumer>
  );
};
