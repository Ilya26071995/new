import React from "react";
import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import cn from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .required("ВВедите имя")
    .min(2, "Минимум 2 буквы")
    .max(10, "Максимум 10 букв")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Только буквы"),
});

const LABELS = [
  { title: "Ваше имя", id: "name", meaning: "name" },
  {
    title: "Название организации",
    id: "organization",
    meaning: "organization",
  },
  { title: "Телефон", id: "phone", meaning: "phone" },
  { title: "E-mail", id: "mail", meaning: "mail" },
];

interface LabelsType {
  title: string;
  id: string;
  meaning: string;
}

const Form = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Офис</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.flex}>
        {LABELS.map(({ title, id, meaning }: LabelsType, index) => (
          <div className={s.miniFlex} key={index}>
            <label htmlFor={id} className={s.label}>
              {title}
            </label>
            <input
              {...register("name")}
              id={id}
              className={s.input}
              type="text"
            ></input>
          </div>
        ))}
        <div className={s.area}>
          <label htmlFor="text" className={s.label}>
            Текст сообщения
          </label>
          <textarea id="text" className={cn(s.input, s.textarea)}></textarea>
        </div>
        <div className={s.send}>
          <div className={s.checkbox}>
            <input type="checkbox"></input>
            <p className={s.text}>
              Нажимая на кнопку «Отправить», вы соглашаетесь с{" "}
              <a
                href="../files/confidentiality.docx"
                download
                className={s.line}
              >
                Условиями использования и Политикой конфиденциальности.
              </a>
            </p>
          </div>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  );
};

export { Form };
