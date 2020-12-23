import React, { createContext } from "react";
import jwt from "jsonwebtoken";
import { userLogin } from "actions";
import { connect } from "react-redux";

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children }) => {
  const signIn = (loginData) => {
    return userLogin(loginData).then((token) => {
      localStorage.setItem("login-token", token);
      console.log(decodeToken(token));
    });
  };

  const decodeToken = (token) => {
    return jwt.decode(token);
  };

  const authApi = {
    signIn,
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
