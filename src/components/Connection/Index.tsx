import React, { useState } from "react";
import s from "./Connection.module.scss";
import { SocialIcon } from "../SocialIcon/index";
import ReactDOM from "react-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";

const connection = [
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
  { link: "#", vid: "btn", text: "ОСТАВИТЬ ЗАЯВКУ" },
];

// TODO: Перенеси в отдельный файл, например, в validations/index.ts
const schema = yup.object({
  material: yup.string(),
  size: yup.string(),
  name: yup
    .string()
    .required("Укажите имя")
    .matches(/([aA-zZаА-яЯ])/, "Только буквы"),
  phone: yup
    .string()
    .required("Укажите номер телефона")
    .matches(/([0-9])/, "Только цифры"),
});

const Connection = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className={s.container}>
      <div className={s.connect}>
        {connection.map(({ link, vid, text, img }, index) => (
          <div className={s.link} key={index}>
            <img src={img} className={img} />
            <a
              className={s[vid]}
              href={link}
              onClick={() => setModalActive(!modalActive)}
            >
              {text}
            </a>
          </div>
        ))}
        {ReactDOM.createPortal(
          <Modal active={modalActive} setActive={setModalActive} />,
          document.body
        )}
      </div>
      <SocialIcon />
    </div>
  );
};

export { Connection };
