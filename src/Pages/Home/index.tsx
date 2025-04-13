import React from "react";
import { BigTitle } from "../../components/BigTitle";
import { Connection } from "../../components/Connection/Index";
import { Download } from "../../components/Download";
import { Footer } from "../../components/Footer";
import { Info } from "../../components/Info";
import { Navigation } from "../../components/Navigation";
import { Options } from "../../components/Options";
import { Subscription } from "../../components/Subscription";

const Home = () => {
  return (
    <div>
      <Connection />
      <Navigation />
      <BigTitle text="Каталог" img="../img/imgCork.png" alt="картинка" />
      <Options />
      <Info />
      <Subscription />
      <Download />
      <Footer />
    </div>
  );
};

export { Home };
