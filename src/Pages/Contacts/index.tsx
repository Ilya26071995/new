import React from "react";
import s from "./Contacts.module.scss";
import { Navigation } from "../../components/Navigation";
import { Connection } from "../../components/Connection/Index";
import { BigTitle } from "../../components/BigTitle/index";
import { Picture } from "../../components/Picture";
import { Communication } from "../../components/Communication";
import { Footer } from "../../components/Footer";
import { Delivery } from "../../components/Delivery";
import { Form } from "../../components/Form";
import { Helmet } from "react-helmet";

const CONTACTS = [
  {
    name: "Телефон",
    img: "./img/ContactPhone.svg",
    alt: "phone",
    texts: [
      { title: "+7 (495) 700 38 01", link: "tel:+74957003801" },
      { title: "+7 (495) 700 66 11", link: "tel:+74957006611" },
      { title: "+7 (911) 290-10-04", link: "tel:+79112901004" },
    ],
  },
  {
    name: "E-mail",
    img: "./img/ContactMail.svg",
    alt: "mail",
    texts: [
      { title: "info@interpan.ru", link: "mailto:info@interpan.ru" },
      {
        title: "interpan2003@gmail.com",
        link: "mailto:interpan2003@gmail.com",
      },
    ],
  },
  {
    name: "Адрес",
    img: "./img/ContactPin.svg",
    alt: "pin",
    texts: [
      {
        title:
          "г. Москва, ул. Верейская \n д. 29 стр. 33 БЦ «Верейская плаза-3», \n офис D-314",
        link: "https://www.google.com/maps?ll=55.70963309654535,37.44212329563124",
      },
    ],
  },
  {
    name: "Часы работы",
    img: "./img/ContactTime.svg",
    alt: "time",
    texts: [
      {
        title:
          "Пн-Чт — с 9.30 до 18.00 (без обеда)\n Пт — с 9.30 до 17.00 \nСб, Вс — Выходной",
        link: "",
      },
    ],
  },
  {
    name: "Обратите внимание",
    texts: [
      { title: "При себе необходимо\n иметь паспорт или права!", link: "" },
    ],
  },
];

const STORE = [
  {
    name: "Телефон",
    img: "./img/ContactPhone.svg",
    alt: "phone",
    texts: [{ title: "+7 (925) 529 72 72", link: "tel:+79255297272" }],
  },
  {
    name: "Адрес",
    img: "./img/ContactPin.svg",
    alt: "pin",
    texts: [
      {
        title:
          "Раменский р-н, Пос.Ильинский,\n ул.Пролетарская, д.49/5 \n\nЗаезд со стороны\n ул. Рабочая, 1-ый шлагбаум",
        link: "https://www.google.com/maps?ll=55.6317717037951,38.10362838199773",
      },
    ],
  },
  {
    name: "Часы работы",
    img: "./img/ContactTime.svg",
    alt: "time",
    texts: [
      {
        title:
          "Пн-Чт — с 9.30 до 17.00\n\n Пт — с 9.30 до 16.00\n\n Сб, Вс — Выходной",
        link: "",
      },
    ],
  },
  {
    name: "Обратите внимание",
    texts: [
      {
        title:
          "Водитель, перед выездом или если вы\n заблудились, введите координаты\n склада в навигатор:\n в адресной строке 55.631503, 38.101001",
        link: "",
      },
    ],
  },
];

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="Контакты" />
      </Helmet>
      <Connection />
      <Navigation />
      <BigTitle text="Контакты" img="../img/imgCork.png" alt="картинка" />
      <Picture src="./img/ContactIMG.png" alt="picture" />
      <div className={s.flex}>
        <Communication title="Офис" cont={CONTACTS} />
        <Communication title="Склад" cont={STORE} />
      </div>
      <Delivery />
      <Form />
      <Footer />
    </div>
  );
};

export { Contacts };
