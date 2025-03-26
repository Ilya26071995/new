import React, { useState } from "react";
import s from "./Btn.module.scss";

interface BtnType {
  children: React.ReactNode;
}

const Btn = ({ children }: BtnType) => {
  return <button className={s.btn}>{children}</button>;
};

export { Btn };
