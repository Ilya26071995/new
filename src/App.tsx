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

function App() {
  return (
    <div className={s.App}>
      <Connection />
      <Navigation />
      <BigTitle />
      <Options />
      <Info />
      <Subscription />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
