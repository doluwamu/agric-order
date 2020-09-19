import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Search from "./components/shared/Search";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Search />

      <Routes />
    </Router>
  );
};

export default App;
