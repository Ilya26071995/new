import React, { useState } from "react";
import s from "./Options.module.scss";
import { Btn } from "../Button/index";
import cn from "classnames";

const OPTIONSARRAY = [
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

const GOODS = [
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

const SUBSCRIBES = [
  { subscribe: "гсп", style: "red" },
  { subscribe: "гкм", style: "blue" },
  { subscribe: "смл", style: "green" },
  { subscribe: "гвл", style: "purple" },
];

interface SubscribesType {
  subscribe: string;
  style: string;
}

const SELECTS = ["Материал 1", "Материал 2", "Материал 3", "Материал 4"];

const Options = () => {
  return (
    <div className={s.big}>
      <div className={s.container}>
        <div className={s.zone}>
          <h2 className={s.title}>Функциональная зона</h2>
          <ul className={s.list}>
            {OPTIONSARRAY.map(({ text }: OptionsArrayType, index) => (
              <li key={index} className={s.option}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.filter}>
          <div className={s.filterHead}>
            <h1 className={s.filterTitle}>Материал основания</h1>
            <img src="./img/filterIcon.svg" alt="filter" />
          </div>
          <form className={s.form}>
            <label htmlFor="material"></label>
            <select
              className={cn(s.options, s.select)}
              id="material"
              name="material"
            >
              <option className={s.options} hidden>
                Выбрать материал
              </option>
              {SELECTS.map((select, index) => {
                return (
                  <option className={s.options} key={index}>
                    {select}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
      <div className={s.bigContainer}>
        <ul className={s.goods}>
          {GOODS.map(({ img, title }: GoodsType, index) => (
            <li className={s.good} key={index}>
              <img src={img} />
              <h3 className={s.titleMini}>{title}</h3>
              <div className={s.subscribes}>
                {SUBSCRIBES.map(
                  ({ subscribe, style }: SubscribesType, index) => (
                    <span className={s[style]} key={index}>
                      {subscribe}
                    </span>
                  )
                )}
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
