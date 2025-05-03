import React from "react";
import { BigTitle } from "../../components/BigTitle";
import { Connection } from "../../components/Connection/Index";
import { Download } from "../../components/Download";
import { Footer } from "../../components/Footer";
import { Info } from "../../components/Info";
import { Navigation } from "../../components/Navigation";
import { Options } from "../../components/Options";
import { Subscription } from "../../components/Subscription";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Главная страница сайта" />
      </Helmet>
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
