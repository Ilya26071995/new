import s from "./App.module.scss";
import React from "react";
import { Connection } from "./components/Connection/Index";
import { Navigation } from "./components/Navigation/index";
import { BigTitle } from "./components/BigTitle/index";
import { Options } from "./components/Options/index";
import { Info } from "./components/Info/index";
import { Subscription } from "./components/Subscription/index";

function App() {
  return (
    <div className={s.App}>
      <Connection />
      <Navigation />
      <BigTitle />
      <Options />
      <Info />
      <Subscription />
    </div>
  );
}

export default App;
