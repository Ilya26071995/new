import React, { useState } from "react";
import s from "./Btn.module.scss";

interface BtnType {
  children: React.ReactNode;
  style: string;
}

// TODO: Компонент должен называться так же, как ты назвал папку

const Btn = ({ children, style }: BtnType) => {
  return <button className={s[style]}>{children}</button>;
};

export { Btn };
