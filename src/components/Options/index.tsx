import React, { useState } from "react";
import s from "./Options.module.scss";
import { Button } from "../Button/index";
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
  { img: "../img/imgCork.png", title: "Панели — Эконом Pixel", type: "bus" },
  {
    img: "../img/imgCork.png",
    title: "Панели окрашенные — Econom",
    type: "evacuation",
  },
  { img: "../img/imgCork.png", title: "Панели — Econom Loft", type: "cafe" },
  {
    img: "../img/imgCork.png",
    title: "Панели HPL пластик — Practic",
    type: "water",
  },

  {
    img: "../img/imgCork.png",
    title: "Панели с натуральным шпоном — Elite",
    type: "sport",
  },
  {
    img: "../img/imgCork.png",
    title: "Панели с ПВХ пленкой — InTerior",
    type: "medical",
  },
  {
    img: "../img/imgCork.png",
    title: "Декоративный профиль для панелей",
    type: "airport",
  },
  {
    img: "../img/imgCork.png",
    title: "Отбойная доска — Design",
    type: "enter",
  },

  {
    img: "../img/imgCork.png",
    title: "Потолочные панели —INTERPAN Mercury",
    type: "children",
  },
  {
    img: "../img/imgCork.png",
    title: "Фасадные и цокольные панели — ExTerior",
    type: "mall",
  },
  {
    img: "../img/imgCork.png",
    title: "Панели антибактериальные — Farma ",
    type: "gas",
  },
  { img: "../img/imgCork.png", title: "Плита без покрытия", type: "warehouse" },
];

interface GoodsType {
  img: string;
  title: string;
  type: string;
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
        <Filter />
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
      <Button style="btn">показать еще</Button>
    </div>
  );
};

export { Options };
