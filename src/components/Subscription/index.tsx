import React, { useState } from "react";
import s from "./Subscription.module.scss";
import cn from "classnames";

const Titles = [
  { title: "Продукция", paragraph: "Описание Продукция" },
  { title: "Описание", paragraph: "Описание Описание" },
  { title: "Габариты и вес", paragraph: "Описание Габариты и вес" },
  {
    title: "Хранение и транспортировка",
    paragraph: "Описание Хранение и транспортировка",
  },
  { title: "Особенности монтажа", paragraph: "Описание Особенности монтажа" },
  { title: "Чертежи, схемы, АТР", paragraph: "Описание Чертежи, схемы, АТР" },
  {
    title: "Характеристики и сравнение",
    paragraph: "Описание Характеристики и сравнение",
  },
  { title: "Утилизация панелей", paragraph: "Описание Утилизация панелей" },
];

interface TitleType {
  title: string;
  paragraph: string;
}

//по клику сделать показ параграфа у элемента списка

const Subscription = () => {
  const [show, setShow] = useState(false);

  const ClickShow = () => {
    setShow((prevshow) => !prevshow);
  };

  return (
    <div>
      <ul>
        {Titles.map(({ title, paragraph }: TitleType, index) => (
          <div className={s.big} key={index}>
            <li onClick={ClickShow}>{title}</li>
            <p className={cn(s.text, show ? s.none : "")}>{paragraph}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { Subscription };
