import React from "react";
import s from "./Communication.module.scss";

type ContType = {
  name: string;
  img?: string;
  alt?: string;
  texts: { title: string; link?: string }[];
};
interface TitleType {
  title: string;
  cont: ContType[];
}

const Communication = ({ title, cont }: TitleType) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {cont.map(({ name, img, alt, texts }, index) => {
        return (
          <div key={index} className={s.flex}>
            <div className={s.face}>
              <h3 className={s.miniTitle}>{name}</h3>
              <img className={s.img} src={img} alt={alt} />
            </div>
            <div className={s.links}>
              {texts.map(({ title, link }, index) => {
                if (link)
                  return (
                    <a
                      className={s.link}
                      href={link}
                      key={index}
                      target="_blank"
                    >
                      {title}
                    </a>
                  );
                return (
                  <span className={s.span} key={index}>
                    {title}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Communication };
