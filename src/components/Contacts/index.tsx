import React from "react";
import s from "./Contacts.module.scss";

interface ContactsType {
  miniTitle: string;
  img?: string;
  alt?: string;
  // TODO: Сделать массивом строк
  texts: string[];
}

const Contacts = ({ miniTitle, img, alt, texts }: ContactsType) => {
  return (
    <div className={s.container}>
      <div className={s.titleIMG}>
        <h3 className={s.miniTitle}>{miniTitle}</h3>
        <img src={img} alt={alt}></img>
      </div>
      <div className={s.flex}>
        {texts.map((text) => {
          return <span className={s.text}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export { Contacts };
