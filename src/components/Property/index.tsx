import React from "react";
import s from "./property.module.scss";
import { Selects } from "../Selects";

const Property = () => {
  return (
    <div>
      <h2 className={s.title}>Выбрать характеристики</h2>
      <Selects />
    </div>
  );
};

export { Property };
