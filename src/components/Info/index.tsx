import React from "react";
import s from "./Info.module.scss";

const Text = [
  {
    text: "Требования к внутренней отделке медицинских учреждений изложены в главе IV СанПиН 2.1.3.2630-10. Все применяемые для этой цели материалы и конструкции должны соответствовать санитарно-эпидемиологическим и противопожарным нормативами, а также подтверждаться соответствующими сертификатами",
  },
  {
    text: "Отделочные материалы ООО «ТД Интерпан» предусматривают принципиально новые, удобные для пациентов и персонала  планировки и современные виды отделки. Применение данной продукции полностью исключает «мокрые» процессы, к которым относятся оштукатуривание и окрашивание и значительно сокращает сроки проведения отделочных работ.",
  },
  {
    text: "В соответствии с требованиями к отделке медицинских учреждений (п.4.2), продукция ООО «ТД Интерпан» имеет гладкую, антистатическую и без трещин поверхность, которая выдерживает частые уборки с использованием средств для чистки и обеззараживания.",
  },
];

interface TextType {
  text: string;
}

const Info = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Медицина</h2>
      <div className={s.cont}>
        <p className={s.text}>
          Требования к внутренней отделке медицинских учреждений изложены в
          главе <br />
          IV СанПиН 2.1.3.2630-10. Все применяемые для этой цели материалы и
          <br />
          конструкции должны соответствовать санитарно-эпидемиологическим
          <br /> и противопожарным нормативами, а также подтверждаться
          соответствующими сертификатами.
          <br />
          <br />
          Отделочные материалы ООО «ТД Интерпан» предусматривают принципиально
          <br />
          новые, удобные для пациентов и персонала планировки и современные виды
          <br />
          отделки. Применение данной продукции полностью исключает «мокрые»
          <br />
          процессы, к которым относятся оштукатуривание и окрашивание и<br />
          значительно сокращает сроки проведения отделочных работ.
          <br />
          <br />В соответствии с требованиями к отделке медицинских учреждений
          (п.4.2),
          <br /> продукция ООО «ТД Интерпан» имеет гладкую, антистатическую и
          без трещин
          <br /> поверхность, которая выдерживает частые уборки с использованием
          средств
          <br /> для чистки и обеззараживания.
        </p>
      </div>
    </div>
  );
};

export { Info };
