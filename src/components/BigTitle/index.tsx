import React from "react";
import s from "./BigTitle.module.scss";

interface TitleType {
  text: string;
  img?: string;
  alt?: string;
}

const BigTitle = ({ text, img, alt }: TitleType) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <span className={s.smallText}>Главная / {text}</span>
        <h1 className={s.bigText}>{text}</h1>
      </div>
      <div className={s.img}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export { BigTitle };
