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
    texts: ["+7 (495) 700 38 01", "+7 (495) 700 66 11", "+7 (911) 290-10-04"],
  },
  {
    miniTitle: "E-mail",
    img: "./img/ContactMail.svg",
    alt: "mail",
    texts: ["info@interpan.ru", "interpan2003@gmail.com"],
  },
  {
    miniTitle: "Адрес",
    img: "./img/ContactPin.svg",
    alt: "pin",
    texts: [
      "г. Москва, ул. Верейская. 29 стр. 33",
      "БЦ «Верейская плаза-3», офис D-314",
    ],
  },
  {
    miniTitle: "Часы работы",
    img: "./img/ContactTime.svg",
    alt: "time",
    texts: [
      "Пн-Чт — с 9.30 до 18.00 (без обеда)",
      "Пт — с 9.30 до 17.00",
      "Сб, Вс — Выходной",
    ],
  },
  {
    miniTitle: "Обратите внимание",
    texts: ["При себе необходимо иметь паспорт или права!"],
  },
];

interface ContType {
  miniTitle: string;
  img?: string;
  alt?: string;
  texts: string[];
}

const Communication = ({ title }: CommunicationType) => {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.title}>{title}</h2>
        {Cont.map(({ miniTitle, img, alt, texts }: ContType, index) => (
          <Contacts
            miniTitle={miniTitle}
            img={img}
            alt={alt}
            texts={texts}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export { Communication };
