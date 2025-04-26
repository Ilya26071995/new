import React from "react";
import s from "./Contacts.module.scss";

interface ContactsType {
  miniTitle: string;
  img?: string;
  alt?: string;
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
          // TODO: в любом map нужно прописывать key, чтобы реакт понимал, что происходит
          return <span className={s.text}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export { Contacts };
