import React, { useState } from "react";
import s from "./Btn.module.scss";

interface BtnType {
  children: React.ReactNode;
  style: string;
}

const Btn = ({ children, style }: BtnType) => {
  return <button className={s[style]}>{children}</button>;
};

export { Btn };
