import React from "react";
import s from "./SocialIcons.module.scss";

const SOCIALICONS = [
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

const SocialIcon = () => {
  return (
    <div className={s.soc}>
      {SOCIALICONS.map(({ link, img, text }, index) => (
        <a href={link} key={index} target="_blank">
          <img src={img} alt={text} />
        </a>
      ))}
    </div>
  );
};

export { SocialIcon };
