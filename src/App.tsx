import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Contacts } from "./components/Pages/Contacts";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contacts">
        <Contacts />
      </Route>
    </Router>
  );
}

export default App;
