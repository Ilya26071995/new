import React from "react";
import s from "./Selects.module.scss";
import { Btn } from "../Button";

interface propsType {
  variant: string;
}

const SIZE = [
  { variant: "Размер 1" },
  { variant: "Размер 2" },
  { variant: "Размер 3" },
  { variant: "Размер 4" },
];

const MATERIAL = [
  { variant: "Материал 1" },
  { variant: "Материал 2" },
  { variant: "Материал 3" },
  { variant: "Материал 4" },
];

const COATING = [
  { variant: "гсп" },
  { variant: "гкл" },
  { variant: "смл" },
  { variant: "гвл" },
];

const Selects = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <select className={s.select}>
          <option hidden>Выбрать размер</option>
          {SIZE.map(({ variant }: propsType) => {
            return <option className={s.option}>{variant}</option>;
          })}
        </select>
        <select className={s.select}>
          <option hidden>Выбрать материал</option>
          {MATERIAL.map(({ variant }: propsType) => {
            return <option className={s.option}>{variant}</option>;
          })}
        </select>
        <select className={s.select}>
          <option hidden>Выбрать покрытие</option>
          {COATING.map(({ variant }: propsType) => {
            return <option className={s.option}>{variant}</option>;
          })}
        </select>
      </form>
      <Btn style="send">ОСТАВИТЬ ЗАЯВКУ</Btn>
    </div>
  );
};

export { Selects };
