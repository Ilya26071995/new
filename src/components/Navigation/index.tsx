import React from "react";
import s from "./Navigation.module.scss";

const Navs = [
  { href: "https//www.cd.ru", text: "ГЛАВНАЯ" },
  { href: "https//www.cd.ru", text: "КАТАЛОГ" },
  { href: "https//www.cd.ru", text: "ТЕХНОЛОГИЯ МОНТАЖА" },
  { href: "https//www.cd.ru", text: "ПРАЙС" },
  { href: "https//www.cd.ru", text: "КЕЙСЫ" },
  { href: "https//www.cd.ru", text: "КОНТАКТЫ" },
];

interface NavsType {
  href: string;
  text: string;
}

const Navigation = () => {
  return (
    <div className={s.container}>
      <div>
        <img src="./img/headerLogo.jpg" alt="logo" />
      </div>
      <div className={s.mini}>
        <ul className={s.list}>
          {Navs.map(({ href, text }: NavsType, index) => (
            <li key={index}>
              <a href={href} className={s.link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <span className={s.lupa}>
          <img src="./img/lupa.svg"></img>
        </span>
      </div>
    </div>
  );
};

export { Navigation };
