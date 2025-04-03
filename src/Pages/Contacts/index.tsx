import React from "react";
import s from "./Contacts.module.scss";
import { Navigation } from "../../components/Navigation";
import { Connection } from "../../components/Connection/Index";
import { BigTitle } from "../../components/BigTitle/index";
import { Picture } from "../../components/Picture";
import { Communication } from "../../components/Communication";

const Comm = [{ title: "Офис" }, { title: "Склад" }];

interface CommType {
  title: string;
}

const Contacts = () => {
  return (
    <div>
      <Connection />
      <Navigation />
      <BigTitle text="Контакты" />
      <Picture src="./img/ContactIMG.png" alt="picture" />
      <div className={s.flex}>
        {Comm.map(({ title }: CommType, index) => (
          <Communication title={title} key={index} />
        ))}
      </div>
    </div>
  );
};

export { Contacts };
