import React from "react";
import s from "./Check.module.scss";

interface CheckProps {
  title: string;
  text: string;
}

const Check = ({ title, text }: CheckProps) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export { Check };
