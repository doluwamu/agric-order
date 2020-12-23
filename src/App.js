import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "services/AuthService";
import NavBar from "./components/shared/NavBar";
import Search from "./components/shared/Search";
import Routes from "./Routes";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />

        <Search />

        <Routes />
      </Router>
    </AuthProvider>
  );
};

export default App;
