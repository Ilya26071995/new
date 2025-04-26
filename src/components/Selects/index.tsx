import React from "react";
import s from "./Selects.module.scss";
import { Button } from "../Button";
import { Select } from "../Select";

const SIZE = ["Размер 1", "Размер 2", "Размер 3", "Размер 4"];

const MATERIAL = ["Материал 1", "Материал 2", "Материал 3", "Материал 4"];

const COATING = ["гсп", "гкл", "смл", "гвл"];

const ARRAY = [
  { mip: SIZE, title: "Выбрать размер" },
  { mip: MATERIAL, title: "Выбрать материал" },
  { mip: COATING, title: "Выбрать покрытие" },
];

interface ArrayType {
  mip: string[];
  title: string;
}

const Selects = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        {ARRAY.map(({ mip, title }: ArrayType, index) => {
          return <Select key={index} hidden={title} subscribes={mip} />;
        })}
      </form>
      <Button style="send">ОСТАВИТЬ ЗАЯВКУ</Button>
    </div>
  );
};

export { Selects };
