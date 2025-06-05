import React from "react";
import s from "./Banner.module.scss";
import { Button } from "../Button";

interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.btn}>
        <Button style="btn">подробнее</Button>
      </div>
      <img src="./img/warning.svg" alt="warning" />
    </div>
  );
};

export { Banner };
