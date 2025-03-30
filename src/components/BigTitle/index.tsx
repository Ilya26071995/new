import React from "react";
import s from "./BigTitle.module.scss";

interface TitleType {
  text: string;
}

const BigTitle = ({ text }: TitleType) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <span className={s.smallText}>Главная / {text}</span>
        <h1 className={s.bigText}>{text}</h1>
      </div>
      <div className={s.img}>
        <img src="../img/imgCork.png" alt="картинка" />
      </div>
    </div>
  );
};

export { BigTitle };
