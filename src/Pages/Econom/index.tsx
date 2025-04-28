import React from "react";
import s from "./Econom.module.scss";
import { Connection } from "../../components/Connection/Index";
import { Navigation } from "../../components/Navigation";
import { BigTitle } from "../../components/BigTitle";
import { CardInfo } from "../../components/CardInfo";
import { Attribute } from "../../components/Attribute";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";
import { Banner } from "../../components/Banner";
import { Calculation } from "../../components/Calculation";
import { Helmet } from "react-helmet";

const Econom = () => {
  return (
    <div>
      <Helmet>
        <title>Econom</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Connection />
      <Navigation />
      <BigTitle text="Interpan Econom" />
      <CardInfo
        img="../img/Econom.png"
        alt="econom"
        title="Декоративные панели Interpan Econom"
        text="Декорированные панели  т.м. «INTERPAN» марки «Interpan Econom»,
         представляют собой лист (гипсокартонный, гипсостружечный, гипсоволокнистый, стекломагнезитовый), 
         окрашенный акриловыми красками методом непрямой глубокой печати.
Декорированные панели т.м. «INTERPAN» марки ««Interpan Econom» применяются для
 отделки стен, устройств перегородок во всех типах зданий, включая детские, медицинские, 
 лечебно-профилактические, санитарно-бытовые учреждения, лабораториях, аэропортах, объектах водного транспорта
  и ж/д вокзалах, на предприятиях торговли и общественного питания, в качестве отделочного материала в условиях 
  промышленного и гражданского строительства."
      />
      <Attribute />
      <Calculation />
      <Projects />
      <Banner title="Баннер для акции или распродажи товаров" />
      <Footer />
    </div>
  );
};

export { Econom };
