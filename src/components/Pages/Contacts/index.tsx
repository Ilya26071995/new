import React from "react";
import s from "./Contacts.module.scss";
import { Navigation } from "../../Navigation";
import { Connection } from "../../Connection/Index";
import { BigTitle } from "../../BigTitle/index";
import { Picture } from "../../Picture";

const Contacts = () => {
  return (
    <div>
      <Connection />
      <Navigation />
      <BigTitle text="Контакты" />
      <Picture src="./img/ContactIMG.png" alt="picture" />
    </div>
  );
};

export { Contacts };
