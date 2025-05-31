import React from "react";
import s from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const NAVS = [
  { href: "/", text: "ГЛАВНАЯ" },
  { href: "/contacts", text: "КАТАЛОГ" },
  { href: "/contacts", text: "ТЕХНОЛОГИЯ МОНТАЖА" },
  { href: "/contacts", text: "ПРАЙС" },
  { href: "/contacts", text: "КЕЙСЫ" },
  { href: "/contacts", text: "КОНТАКТЫ" },
];

const Navigation = () => {
  return (
    <div className={s.container}>
      <div>
        <Link to="/">
          <img src="./img/Logo1.svg" alt="logo" />
        </Link>
      </div>
      <div className={s.mini}>
        <ul className={s.list}>
          {NAVS.map(({ href, text }, index) => (
            <li key={index}>
              <Link to={href} className={s.link}>
                {text}
              </Link>
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
