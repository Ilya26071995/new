import React from "react";
import s from "./Connection.module.scss";
import { SocialIcon } from "../SocialIcon/index";

const CONNECTION = [
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
  { link: "https://mail.ru/", vid: "btn", text: "ОСТАВИТЬ ЗАЯВКУ" },
];

interface ConnectionsType {
  link: string;
  vid: string;
  text: string;
  img?: string;
}

const Connection = () => {
  return (
    <div className={s.container}>
      <div className={s.connect}>
        {CONNECTION.map(({ link, vid, text, img }: ConnectionsType, index) => (
          <div className={s.link} key={index}>
            <img src={img} className={img} />
            <a className={s[vid]} href={link}>
              {text}
            </a>
          </div>
        ))}
      </div>
      <SocialIcon />
    </div>
  );
};

export { Connection };
