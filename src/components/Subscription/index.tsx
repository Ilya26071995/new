import React from "react";
import s from "./Subscription.module.scss";

const TITLES = [
  { title: "Продукция" },
  { title: "Описание" },
  { title: "Габариты и вес" },
  { title: "Хранение и транспортировка" },
  { title: "Особенности монтажа" },
  { title: "Чертежи, схемы, АТР" },
  { title: "Характеристики и сравнение" },
  { title: "Утилизация панелей" },
];

const Subscription = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {TITLES.map(({ title }, index) => (
          <li className={s.option} key={index}>
            {title}
          </li>
        ))}
      </ul>
      <div className={s.white}></div>
    </div>
  );
};

export { Subscription };
