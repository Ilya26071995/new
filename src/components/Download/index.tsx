import React from "react";
import s from "./Download.module.scss";

const FILES = [
  {
    img: "../img/presentIcon.png",
    alt: "Стеновые панели Интерпан",
    link: "../files/wall.pptx",
    text: "Стеновые панели Интерпан",
  },
  {
    img: "../img/presentIcon.png",
    alt: "Потолочные панели Интерпан",
    link: "../files/ceiling.pptx",
    text: "Потолочные панели Интерпан",
  },
];

interface FilesType {
  img: string;
  alt: string;
  link: string;
  text: string;
}

const Download = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h2 className={s.head}>Посмотрите презентации о наших продуктах</h2>
      </div>
      <div className={s.files}>
        {FILES.map(({ img, alt, link, text }: FilesType, index) => (
          <div className={s.option} key={index}>
            <a className={s.flex} href={link} download>
              <img src={img} alt={alt} />
              <span className={s.text}>{text}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Download };
