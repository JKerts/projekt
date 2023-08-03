import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
