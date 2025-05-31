import React from "react";
import s from "./Footer.module.scss";
import { SocialIcon } from "../SocialIcon/index";
import { Link } from "react-router-dom";

const NAVS = [
  { href: "https//www.cd.ru", text: "Главная" },
  { href: "https//www.cd.ru", text: "Каталог" },
  { href: "https//www.cd.ru", text: "Технологии монтажа" },
  { href: "https//www.cd.ru", text: "Прайс" },
  { href: "https//www.cd.ru", text: "Кейсы" },
  { href: "https//www.cd.ru", text: "Контакты" },
];

const CONNECTIONS = [
  {
    link: "mailto:https://mail.ru/",
    vid: "mail",
    text: "info@interpan.ru",
    img: "../img/mail.svg",
  },
  {
    link: "tel:+74957305501",
    vid: "phone",
    text: "+7 (495) 730-55-01",
    img: "../img/phone.svg",
  },
];

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Link to="/">
          <img src="../img/Logo1.svg" alt="logo" />
        </Link>

        <p className={s.text}>
          SEO текст для продвижения сайта в поисковиках содержащий ключевые
          слова, теги или другую информацию, которая может быть неинтересна
          пользователю, но поможет в поисковом продвижении сайта.
        </p>
      </div>
      <div className={s.footNav}>
        <div>
          <h2 className={s.title}>Меню</h2>
          <ul className={s.list}>
            {NAVS.map(({ href, text }, index) => (
              <li key={index}>
                <a href={href} className={s.link}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.connect}>
          <div className={s.flex}>
            <h2 className={s.title}>Связаться с нами</h2>
            {CONNECTIONS.map(({ link, vid, text, img }, index) => (
              <div className={s.link} key={index}>
                <img src={img} className={img} />
                <a className={s[vid]} href={link}>
                  {text}
                </a>
              </div>
            ))}
            <div>
              <h3 className={s.smallText}>Мы в социальных сетях:</h3>
              <SocialIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
