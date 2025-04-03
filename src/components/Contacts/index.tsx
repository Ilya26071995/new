import React from "react";
import s from "./Contacts.module.scss";

interface ContactsType {
  miniTitle: string;
  img?: string;
  alt?: string;
  // TODO: Сделать массивом строк
  text1: string;
  text2?: string;
  text3?: string;
}

const Contacts = ({
  miniTitle,
  img,
  alt,
  text1,
  text2,
  text3,
}: ContactsType) => {
  return (
    <div className={s.container}>
      <div className={s.titleIMG}>
        <h3 className={s.miniTitle}>{miniTitle}</h3>
        <img src={img} alt={alt}></img>
      </div>
      <div className={s.flex}>
        <span className={s.text}>{text1}</span>
        <span className={s.text}>{text2}</span>
        <span className={s.text}>{text3}</span>
      </div>
    </div>
  );
};

export { Contacts };
