import React from "react";
import s from "./Form.module.scss";
import { useForm } from "react-hook-form";

const LABELS = ["Ваше имя", "Название организации", "Телефон", "E-mail"];

const Form = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Офис</h2>
      <form className={s.flex}>
        {LABELS.map((label, index) => (
          <div className={s.miniFlex} key={index}>
            <label className={s.label}>{label}</label>
            <input className={s.input} type="text"></input>
          </div>
        ))}
        <div>
          <label className={s.label}>Текст сообщения</label>
          <textarea className={s.input}></textarea>
        </div>
      </form>
    </div>
  );
};

export { Form };
