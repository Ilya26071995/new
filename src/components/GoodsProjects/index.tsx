import React from "react";
import s from "./GoodsProjects.module.scss";

interface GoodsType {
  img: string;
  text: string;
  alt: string;
}

const GoodsProjects = ({ img, text, alt }: GoodsType) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={img} alt={alt} />
      <p className={s.text}>{text}</p>
    </div>
  );
};

export { GoodsProjects };
