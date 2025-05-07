import React from "react";
import s from "./Communication.module.scss";

interface TitleType {
  title: string;
  cont: any;
}

interface ContType {
  name: string;
  img: string;
  alt: string;
  texts: any;
}

const Communication = ({ title, cont }: TitleType) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {cont.map(({ name, img, alt, texts }: ContType, index: React.Key) => {
        return (
          <div key={index} className={s.flex}>
            <div>
              <h3 className={s.miniTitle}>{name}</h3>
              <img src={img} alt={alt} />
            </div>
            <div className={s.links}>
              {texts.map(
                (
                  text: {
                    link: string | undefined;
                    title: undefined;
                  },
                  index: React.Key
                ) => {
                  return (
                    <a
                      className={s.link}
                      href={text.link}
                      key={index}
                      target="_blank"
                    >
                      {text.title}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Communication };
