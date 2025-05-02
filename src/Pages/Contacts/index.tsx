import React from "react";
import s from "./Contacts.module.scss";
import { Navigation } from "../../components/Navigation";
import { Connection } from "../../components/Connection/Index";
import { BigTitle } from "../../components/BigTitle/index";
import { Picture } from "../../components/Picture";
import { Communication } from "../../components/Communication";
import { Footer } from "../../components/Footer";
import { Delivery } from "../../components/Delivery";
import { Form } from "../../components/Form";
import { Helmet } from "react-helmet";

const Comm = [{ title: "Офис" }, { title: "Склад" }];

interface CommType {
  title: string;
}

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
        <meta name="Contacts" content="Контакты" />
      </Helmet>
      <Connection />
      <Navigation />
      <BigTitle text="Контакты" img="../img/imgCork.png" alt="картинка" />
      <Picture src="./img/ContactIMG.png" alt="picture" />
      <div className={s.flex}>
        {Comm.map(({ title }: CommType, index) => (
          <Communication title={title} key={index} />
        ))}
      </div>
      <Delivery />
      <Form />
      <Footer />
    </div>
  );
};

export { Contacts };
