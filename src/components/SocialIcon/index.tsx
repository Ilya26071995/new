import React from "react";
import s from "./SocialIcons.module.scss";

const SocialIcons = [
  {
    link: "https://www.facebook.com",
    img: "../img/facebook.svg",
    text: "facebook",
  },
  { link: "https://www.vk.com", img: "../img/vk.svg", text: "vk" },
  {
    link: "https://www.youtube.com/",
    img: "../img/youtube.svg",
    text: "youtube",
  },
];

interface SocialIconsType {
  link: string;
  img: string;
  text: string;
}

const SocialIcon = () => {
  return (
    <div className={s.soc}>
      {SocialIcons.map(({ link, img, text }: SocialIconsType, index) => (
        <a href={link} key={index}>
          <img src={img} alt={text} />
        </a>
      ))}
    </div>
  );
};

export { SocialIcon };
