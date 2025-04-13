import React from "react";
import s from "./CardInfo.module.scss";
import { Property } from "../Property";

interface InfoType {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const CardInfo = ({ img, title, text, alt }: InfoType) => {
  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src={img} alt={alt} />
      </div>
      <div className={s.miniContainer}>
        <div className={s.bigText}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.text}>{text}</p>
        </div>
        <Property />
      </div>
    </div>
  );
};

export { CardInfo };
