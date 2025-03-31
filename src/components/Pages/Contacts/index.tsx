import React from "react";
import s from "./Contacts.module.scss";
import { Navigation } from "../../Navigation";
import { Connection } from "../../Connection/Index";
import { BigTitle } from "../../BigTitle/index";
import { Picture } from "../../Picture";
import { Communication } from "../../Communication";

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
