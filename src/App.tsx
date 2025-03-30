import s from "./App.module.scss";
import React from "react";
import { Connection } from "./components/Connection/Index";
import { Navigation } from "./components/Navigation/index";
import { BigTitle } from "./components/BigTitle/index";
import { Options } from "./components/Options/index";
import { Info } from "./components/Info/index";
import { Subscription } from "./components/Subscription/index";
import { Download } from "./components/Download/index";
import { Footer } from "./components/Footer/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
