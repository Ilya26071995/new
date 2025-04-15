import React from "react";
import s from "./Select.module.scss";

interface propsType {
  hidden: string;
  subscribes: string[];
}

const Select = ({ hidden, subscribes }: propsType) => {
  return (
    <select className={s.select}>
      <option hidden className={s.hidden}>
        {hidden}
      </option>
      {subscribes.map((subscribe, index) => {
        return (
          <option key={index} className={s.option}>
            {subscribe}
          </option>
        );
      })}
    </select>

    // <select className={s.select}>
    //   <option hidden>Выбрать материал</option>
    //   {MATERIAL.map(({ variant }: propsType) => {
    //     return <option className={s.option}>{variant}</option>;
    //   })}
    // </select>
  );
};

export { Select };
