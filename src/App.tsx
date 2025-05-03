import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contacts } from "./Pages/Contacts";
import { Econom } from "./Pages/Econom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contacts">
        <Contacts />
      </Route>
      <Route exact path="/econom">
        <Econom />
      </Route>
    </Router>
  );
}

export default App;
