import React from "react";
import { Contacts } from "../Contacts";
import s from "./Communication.module.scss";

interface CommunicationType {
  title: string;
}

const Cont = [
  {
    miniTitle: "Телефон",
    img: "./img/ContactPhone.svg",
    alt: "phone",
    text1: "+7 (495) 700 38 01",
    text2: "+7 (495) 700 66 11",
    text3: "+7 (911) 290-10-04",
  },
  {
    miniTitle: "E-mail",
    img: "./img/ContactMail.svg",
    alt: "mail",
    text1: "info@interpan.ru",
    text2: "interpan2003@gmail.com",
  },
  {
    miniTitle: "Адрес",
    img: "./img/ContactPin.svg",
    alt: "pin",
    text1: "г. Москва, ул. Верейская. 29 стр. 33",
    text2: "БЦ «Верейская плаза-3», офис D-314",
  },
  {
    miniTitle: "Часы работы",
    img: "./img/ContactTime.svg",
    alt: "time",
    text1: "Пн-Чт — с 9.30 до 18.00 (без обеда)",
    text2: "Пт — с 9.30 до 17.00",
    text3: "Сб, Вс — Выходной",
  },
  {
    miniTitle: "Обратите внимание",
    text1: "При себе необходимо иметь паспорт или права!",
  },
];

interface ContType {
  miniTitle: string;
  img?: string;
  alt?: string;
  //TODO: Сделать массивом строк
  text1: string;
  text2?: string;
  text3?: string;
}

const Communication = ({ title }: CommunicationType) => {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.title}>{title}</h2>
        {Cont.map(({ miniTitle, img, alt, text1, text2, text3 }: ContType, index) => (
          <Contacts miniTitle={miniTitle} img={img} alt={alt} text1={text1} text2={text2} text3={text3} key={index} />
        ))}
      </div>
    </div>
  );
};

export { Communication };
