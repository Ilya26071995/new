import React from "react";
import s from "./Picture.module.scss";

interface PictureType {
  src: string;
  alt: string;
}

const Picture = ({ src, alt }: PictureType) => {
  return (
    <div className={s.img}>
      <img className={s.picture} src={src} alt={alt} />
    </div>
  );
};

export { Picture };
