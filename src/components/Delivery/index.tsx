import React from "react";
import s from "./Delivery.module.scss";

const INFO = [
  {
    title: "Товары отпускаются по факту оплаты",
    text: "после зачисления денежных средств на расчетный счет",
  },
  {
    title: "Необходимо иметь  нужные документы",
    text: "для выдачи товара необходимо иметь доверенность и паспорт",
  },
  {
    title: "Грузоподъёмность машины от 1.5 тонн",
    text: "отгружаются при наличии боковой загрузки",
  },
  {
    title: "Согласуйте время приезда заранее",
    text: "чтобы не стоять в очереди позвоните и согласуйте время",
  },
];

const Delivery = () => {
  return (
    <div className={s.background}>
      {INFO.map(({ title, text }, index) => (
        <div className={s.block} key={index}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.text}>{text}</p>
        </div>
      ))}
    </div>
  );
};

export { Delivery };
