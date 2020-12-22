import React, { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const AuthConsumer = () => {};
