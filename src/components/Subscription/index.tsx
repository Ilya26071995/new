import React, { useState } from "react";
import s from "./Subscription.module.scss";

const Titles = [
  { title: "Продукция" },
  { title: "Описание" },
  { title: "Габариты и вес" },
  { title: "Хранение и транспортировка" },
  { title: "Особенности монтажа" },
  { title: "Чертежи, схемы, АТР" },
  { title: "Характеристики и сравнение" },
  { title: "Утилизация панелей" },
];

interface TitleType {
  title: string;
}

const Subscription = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {Titles.map(({ title }: TitleType, index) => (
          <li className={s.option}>{title}</li>
        ))}
      </ul>
      <div className={s.white}></div>
    </div>
  );
};

export { Subscription };
