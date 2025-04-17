import React from "react";
import s from "./Econom.module.scss";
import { Connection } from "../../components/Connection/Index";
import { Navigation } from "../../components/Navigation";
import { BigTitle } from "../../components/BigTitle";
import { CardInfo } from "../../components/CardInfo";
import { Property } from "../../components/Property";
import { Attribute } from "../../components/Attribute";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";
import { Banner } from "../../components/Banner";
import { Calculation } from "../../components/Calculation";

const Econom = () => {
  return (
    <div>
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
      <Banner />
      <Footer />
    </div>
  );
};

export { Econom };
