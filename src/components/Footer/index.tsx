import React from "react";
import s from "./Footer.module.scss";
import { SocialIcon } from "../SocialIcon/index";

const Navs = [
  { href: "https//www.cd.ru", text: "Главная" },
  { href: "https//www.cd.ru", text: "Каталог" },
  { href: "https//www.cd.ru", text: "Технологии монтажа" },
  { href: "https//www.cd.ru", text: "Прайс" },
  { href: "https//www.cd.ru", text: "Кейсы" },
  { href: "https//www.cd.ru", text: "Контакты" },
];

interface NavsType {
  href: string;
  text: string;
}

const Connections = [
  {
    link: "https://mail.ru/",
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
interface ConnectionsType {
  link: string;
  vid: string;
  text: string;
  img?: string;
}

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src="../img/headerLogo.jpg" alt="logo" />
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
            {Navs.map(({ href, text }: NavsType, index) => (
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
            {Connections.map(
              ({ link, vid, text, img }: ConnectionsType, index) => (
                <div className={s.link} key={index}>
                  <img src={img} className={img} />
                  <a className={s[vid]} href={link}>
                    {text}
                  </a>
                </div>
              )
            )}
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
