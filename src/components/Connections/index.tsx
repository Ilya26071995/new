import { useState } from "react";
import s from "./Connections.module.scss";
import { SocialIcon } from "../SocialIcon/index";
import ReactDOM from "react-dom";
import { Modal } from "../Modal";

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

const Connection = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className={s.container}>
      <div className={s.connect}>
        {CONNECTION.map(({ link, vid, text, img }, index) => (
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
