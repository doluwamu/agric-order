import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, useAuth } from "services/AuthService";
import NavBar from "./components/shared/NavBar";
import Search from "./components/shared/Search";
import Routes from "./routes/Routes";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const AgApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkUserAuthentication();
  }, [authService]);

  return (
    <Router>
      <NavBar logout={authService.logOut} />

      <Search />

      <Routes />
    </Router>
  );
};

const App = () => {
  return (
    <Provider>
      <AgApp />
    </Provider>
  );
};

export default App;
