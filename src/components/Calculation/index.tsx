import React, { useState } from "react";
import s from "./Calculation.module.scss";
// TODO: удаляй неиспользуемые импорты
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check } from "../Check";
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
