import React from "react";
import s from "./Banner.module.scss";
import { Btn } from "../Button";

const Banner = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Баннер для акции или распродажи товаров</h2>
      <div className={s.btn}>
        <Btn style="btn">подробнее</Btn>
      </div>
      <img src="./img/warning.svg" alt="warning" />
    </div>
  );
};

export { Banner };
