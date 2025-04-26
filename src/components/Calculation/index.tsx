import React from "react";
import s from "./Calculation.module.scss";
import { LeftForm } from "../LeftForm";
import { RightForm } from "../RightForm";

const Calculation = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Расчет материалов</h2>
      <div className={s.formContainer}>
        <LeftForm />
        <RightForm />
      </div>
    </div>
  );
};

export { Calculation };
