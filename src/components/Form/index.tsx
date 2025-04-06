import React from "react";
import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import cn from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  phone: yup
    .string()
    .required("Введите номер")
    .min(10, "Минимум 11 цифр")
    .max(15, "Максимум 11 цифр")
    .matches(/([0-9])/, "Только цифры"),
  name: yup
    .string()
    .required("Введите имя")
    .min(2, "Минимум 2 буквы")
    .max(10, "Максимум 10 букв")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Только буквы"),
  organization: yup
    .string()
    .required("Введите название организации")
    .min(2, "Минимум 2 буквы")
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, "Только буквы"),
  mail: yup
    .string()
    .required("Введите e-mail")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
  text: yup
    .string()
    .required("Введите текст сообщения")
    .min(20, "Минимум 20 букв")
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, "Только буквы"),
});

const LABELS = [
  { title: "Ваше имя", id: "name", type: "text" },
  {
    title: "Название организации",
    id: "organization",
    type: "text",
  },
  { title: "Телефон", id: "phone", type: "string" },
  { title: "E-mail", id: "mail", type: "text" },
];

interface LabelsType {
  title: string;
  id: string;
  type: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Офис</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.flex}>
        <label className={s.miniFlex} htmlFor="name">
          Ваше имя
          <input
            className={s.input}
            type="text"
            id="name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </label>
        <label className={s.miniFlex} htmlFor="phone">
          Телефон
          <input
            className={s.input}
            type="text"
            id="phone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
        </label>
        <label className={s.miniFlex} htmlFor="organization">
          Название организации
          <input
            className={s.input}
            type="text"
            id="organization"
            {...register("organization")}
          />
          <p>{errors.organization?.message}</p>
        </label>
        <label className={s.miniFlex} htmlFor="mail">
          E-mail
          <input
            className={s.input}
            type="text"
            id="mail"
            {...register("mail")}
          />
          <p>{errors.mail?.message}</p>
        </label>
        <div className={s.area}>
          <label htmlFor="text" className={s.label}>
            Текст сообщения
            <textarea
              id="text"
              {...register("text")}
              className={cn(s.input, s.textarea)}
            ></textarea>
            <p>{errors.text?.message}</p>
          </label>
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
          <input className={s.btn} type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  );
};

export { Form };
