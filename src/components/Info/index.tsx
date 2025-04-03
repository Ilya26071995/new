import React from "react";
import s from "./Info.module.scss";

const TEXT = [
  "Требования к внутренней отделке медицинских учреждений изложены в главе IV СанПиН 2.1.3.2630-10. Все применяемые для этой цели материалы и конструкции должны соответствовать санитарно-эпидемиологическим и противопожарным нормативами, а также подтверждаться соответствующими сертификатами",
  "Отделочные материалы ООО «ТД Интерпан» предусматривают принципиально новые, удобные для пациентов и персонала  планировки и современные виды отделки. Применение данной продукции полностью исключает «мокрые» процессы, к которым относятся оштукатуривание и окрашивание и значительно сокращает сроки проведения отделочных работ.",
  "В соответствии с требованиями к отделке медицинских учреждений (п.4.2), продукция ООО «ТД Интерпан» имеет гладкую, антистатическую и без трещин поверхность, которая выдерживает частые уборки с использованием средств для чистки и обеззараживания.",
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
          {TEXT.map((tex) => (
            <p>{tex}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export { Info };
