import React from "react";
import s from "./Attribute.module.scss";
import { Subscription } from "../Subscription";

const Attribute = () => {
  return (
    <div>
      <h2 className={s.title}>Характеристики</h2>
      <Subscription />
    </div>
  );
};

export { Attribute };
