// TODO: Нужно удалять неиспользуемые импорты, это касается всех мест
import React, { useState } from "react";
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

interface TitleType {
  title: string;
}

const Subscription = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {/* TODO: Не нужно дополнительно прописывать для деструктуризации типизацию, ты можешь либо типизировать сам MOCK, либо ТС будет сам это делать */}
        {TITLES.map(({ title }: TitleType, index) => (
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
