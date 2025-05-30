import React from "react";
import s from "./Projects.module.scss";
import { GoodsProjects } from "../GoodsProjects";
import cn from "classnames";
import { Link } from "react-router-dom";

const ARROWS = [
  { img: "../img/Left.svg", alt: "назад" },
  { img: "../img/Right.svg", alt: "вперед" },
];

interface ArrowsType {
  img: string;
  alt: string;
}

const GOODS = [
  {
    img: "../img/imgCork.png",
    text: "Название компании или кейса проекта 1",
    alt: "project",
  },
  {
    img: "../img/imgCork.png",
    text: "Название компании или кейса проекта 2",
    alt: "project",
  },
  {
    img: "../img/imgCork.png",
    text: "Название компании или кейса проекта 3",
    alt: "project",
  },
  {
    img: "../img/imgCork.png",
    text: "Название компании или кейса проекта 4",
    alt: "project",
  },
];

interface GoodsType {
  img: string;
  text: string;
  alt: string;
}

const Projects = () => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <h2 className={s.title}>Выполненные проекты</h2>
        <div className={s.arrows}>
          {ARROWS.map(({ img, alt }: ArrowsType, index) => {
            return (
              <a href='#' key={index}>
                <img src={img} alt={alt}></img>
              </a>
            );
          })}
        </div>
      </div>
      <div className={s.GoodsProjects}>
        {/* TODO: Перестань ставить типизацию к деструктурированным пропам. Проверь все файлы, где такое есть и убери */}
        {GOODS.map(({ img, text, alt }: GoodsType, index) => {
          return <GoodsProjects img={img} text={text} alt={alt} key={index} />;
        })}
      </div>
      <div className={s.flex}>
        <div className={s.bigFlex}>
          <img className={cn(s.left, s.arrow)} src='./img/arrowRight.svg' alt='back' />{" "}
          <div className={s.miniFlex}>
            {" "}
            <h2 className={s.miniTitle}>Предыдущая категория</h2> <p className={s.miniText}>Плита без покрытия</p>
          </div>
        </div>
        <div>
          <Link to={"/"}>
            <img src='./img/back.svg' alt='back' />
          </Link>
        </div>
        <div className={s.bigFlex}>
          <div className={s.miniFlex}>
            <h2 className={s.miniTitle}>Следующая категория</h2> <p className={s.miniText}>Econom loft</p>
          </div>
          <img className={cn(s.right, s.arrow)} src='./img/arrowRight.svg' alt='back' />
        </div>
      </div>
    </div>
  );
};

export { Projects };
