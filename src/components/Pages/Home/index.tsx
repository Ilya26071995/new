import React from "react";
import { BigTitle } from "../../BigTitle";
import { Connection } from "../../Connection/Index";
import { Download } from "../../Download";
import { Footer } from "../../Footer";
import { Info } from "../../Info";
import { Navigation } from "../../Navigation";
import { Options } from "../../Options";
import { Subscription } from "../../Subscription";

const Home = () => {
  return (
    <div>
      <Connection />
      <Navigation />
      <BigTitle text="Каталог" />
      <Options />
      <Info />
      <Subscription />
      <Download />
      <Footer />
    </div>
  );
};

export { Home };
