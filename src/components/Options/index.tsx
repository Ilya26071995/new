import React, { useState } from "react";
import s from "./Options.module.scss";
import { Btn } from "../Button/index";
import { Filter } from "../Filter";
import { Link } from "react-router-dom";

const OPTIONSARRAY = [
  { text: "Административные  помещения", value: "admin" },
  { text: "Спортивные объекты", value: "sport" },
  { text: "Общепит", value: "cafe" },
  { text: "Образовательные учреждения", value: "school" },
  { text: "Офисные помещения", value: "offis" },
  { text: "Производство", value: "production" },
  { text: "Склады и терминалы", value: "warehouse" },
  { text: "Автозаправки и НПЗ", value: "gas" },
  { text: "Торговые центры", value: "mall" },
  { text: "Детские заведения", value: "children" },
  { text: "Аквапарки", value: "water" },
  { text: "Входные группы", value: "enter" },
  { text: "Пути эвакуации", value: "evacuation" },
  { text: "ЖД и автовокзалы", value: "bus" },
  { text: "Аэро- и речпорты", value: "airport" },
  { text: "Медицинские учреждения", value: "medical" },
];

interface OptionsArrayType {
  text: string;
  value: string;
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
            {OPTIONSARRAY.map(({ text, value }: OptionsArrayType, index) => (
              <li key={index} className={s.option} value={value}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <Filter filterTitle="Выбрать материал" />
      </div>
      <div className={s.bigContainer}>
        <ul className={s.goods}>
          {GOODS.map(({ img, title }: GoodsType, index) => (
            <Link to={"/econom"} key={index}>
              <li className={s.good}>
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
            </Link>
          ))}
        </ul>
      </div>
      <Btn style="btn">показать еще</Btn>
    </div>
  );
};

export { Options };
