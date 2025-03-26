import React from "react";
import s from "./BigTitle.module.scss";

const BigTitle = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <span className={s.smallText}>Главная / Каталог</span>
        <h1 className={s.bigText}>Каталог</h1>
      </div>
      <div className={s.img}>
        <img src="../img/imgCork.png" alt="картинка" />
      </div>
    </div>
  );
};

export { BigTitle };
