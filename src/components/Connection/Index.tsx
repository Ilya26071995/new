import React, { useState } from "react";
import s from "./Connection.module.scss";
import { SocialIcon } from "../SocialIcon/index";
import ReactDOM from "react-dom";
// Тут используй нативный createPortal из реакта
import Modal from "react-modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
  { link: "#", vid: "btn", text: "ОСТАВИТЬ ЗАЯВКУ" },
];

interface ConnectionsType {
  link: string;
  vid: string;
  text: string;
  img?: string;
}

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const modalContent = (
    <div className={s.modalCont}>
      <h2 className={s.modalTitle}>Заказать обратный звонок</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.cont}>
          <label className={s.label}>
            Ваше имя
            <input className={s.input} type="text" {...register("name")} />
          </label>
          <p className={s.error}>{errors.name?.message}</p>
        </div>
        <div className={s.cont}>
          <label className={s.label}>
            Ваш номер телефона
            <input className={s.input} type="text" {...register("phone")} />
          </label>
          <p className={s.error}>{errors.phone?.message}</p>
        </div>
        <div className={s.buttons}>
          <input className={s.button} type="submit" value="Заказать звонок" />{" "}
          <button className={s.close} onClick={closeModal}>
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={s.container}>
      <div className={s.connect}>
        {CONNECTION.map(({ link, vid, text, img }: ConnectionsType, index) => (
          <div className={s.link} key={index}>
            <img src={img} className={img} />
            <a className={s[vid]} href={link} onClick={openModal}>
              {text}
            </a>
          </div>
        ))}
        {ReactDOM.createPortal(
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className={s.modal}
          >
            {modalContent}
          </Modal>,
          document.body
        )}
      </div>
      <SocialIcon />
    </div>
  );
};

export { Connection };
