import React from "react";
import s from "./Banner.module.scss";
import { Btn } from "../Button";

const Banner = () => {
  return (
    <div className={s.container}>
      {/* TODO: Эта информация должна приходить из пропсов, чтобы ты мог вставить баннер куда угодно */}
      <h2 className={s.title}>Баннер для акции или распродажи товаров</h2>
      <div className={s.btn}>
        {/* TODO: Компоненты нужно называть более понятно, не нужно гнаться за сокращениями, в случае с Btn должно быть <Button> */}
        <Btn style='btn'>подробнее</Btn>
      </div>
      <img src='./img/warning.svg' alt='warning' />
    </div>
  );
};

export { Banner };
