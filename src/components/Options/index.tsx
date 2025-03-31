import React, { useState } from "react";
import s from "./Options.module.scss";
import { Btn } from "../Button/index";

const OptionsArray = [
  { text: "Административные  помещения" },
  { text: "Спортивные объекты" },
  { text: "Общепит" },
  { text: "Образовательные учреждения" },
  { text: "Офисные помещения" },
  { text: "Производство" },
  { text: "Склады и терминалы" },
  { text: "Автозаправки и НПЗ" },
  { text: "Торговые центры" },
  { text: "Детские заведения" },
  { text: "Аквапарки" },
  { text: "Входные группы" },
  { text: "Пути эвакуации" },
  { text: "ЖД и автовокзалы" },
  { text: "Аэро- и речпорты" },
  { text: "Медицинские учреждения" },
];

interface OptionsArrayType {
  text: string;
}

const Goods = [
  { img: "../img/imgCork.png", title: "Панели — Эконом Pixel" },
  { img: "../img/imgCork.png", title: "Панели окрашенные — Econom" },
  { img: "../img/imgCork.png", title: "Панели — Econom Loft" },
  { img: "../img/imgCork.png", title: "Панели HPL пластик — Practic" },

  { img: "../img/imgCork.png", title: "Панели с натуральным шпоном — Elite" },
  { img: "../img/imgCork.png", title: "Панели с ПВХ пленкой — InTerior" },
  { img: "../img/imgCork.png", title: "Декоративный профиль для панелей" },
  { img: "../img/imgCork.png", title: "Отбойная доска — Design" },

  { img: "../img/imgCork.png", title: "Потолочные панели —INTERPAN Mercury" },
  {
    img: "../img/imgCork.png",
    title: "Фасадные и цокольные панели — ExTerior",
  },
  { img: "../img/imgCork.png", title: "Панели антибактериальные — Farma " },
  { img: "../img/imgCork.png", title: "Плита без покрытия" },
];

interface GoodsType {
  img: string;
  title: string;
}

const Subscribes = [
  { subscribe: "гсп", style: "red" },
  { subscribe: "гкм", style: "blue" },
  { subscribe: "смл", style: "green" },
  { subscribe: "гвл", style: "purple" },
];

interface SubscribesType {
  subscribe: string;
  style: string;
}

const Options = () => {
  return (
    <div className={s.big}>
      <div className={s.container}>
        <div className={s.zone}>
          <h2 className={s.title}>Функциональная зона</h2>
          <ul className={s.list}>
            {OptionsArray.map(({ text }: OptionsArrayType, index) => (
              <li key={index} className={s.option}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.filter}>
          <div>
            <h1 className={s.filterTitle}>Материал основания</h1>
          </div>
          <form>
            <label htmlFor='material'>Выбрать материал</label>
            <select id='material' name='material'>
              {/* Вынести в переменную */}
              <option>Материал 1</option>
              <option>Материал 2</option>
              <option>Материал 3</option>
              <option>Материал 4</option>
            </select>
          </form>
        </div>
      </div>
      <div className={s.bigContainer}>
        <ul className={s.goods}>
          {Goods.map(({ img, title }: GoodsType, index) => (
            <li className={s.good} key={index}>
              <img src={img} />
              <h3 className={s.titleMini}>{title}</h3>
              <div className={s.subscribes}>
                {Subscribes.map(({ subscribe, style }: SubscribesType, index) => (
                  <span className={s[style]} key={index}>
                    {subscribe}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Btn>показать еще</Btn>
    </div>
  );
};

export { Options };
