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
    .max(11, "Максимум 11 цифр")
    .matches(/([0-9]{3})[0-9]{3}-[0-9]{4}/, "Только цифры"),
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
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Только буквы"),
  mail: yup
    .string()
    .required("Введите e-mail")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
});

const LABELS = [
  { title: "Ваше имя", id: "name", type: "text" },
  {
    title: "Название организации",
    id: "organization",
    type: "text",
  },
  { title: "Телефон", id: "phone", type: "number" },
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
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Офис</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.flex}>
        {LABELS.map(({ title, id, type }: LabelsType, index) => (
          <div className={s.miniFlex} key={index}>
            <label htmlFor={id} className={s.label}>
              {title}
            </label>
            <input
              {...register("mail")} //как сюда вместо "name" поставить meaning?
              id={id}
              className={s.input}
              type={type}
            />
            <p className={s.text}>{errors.mail?.message}</p>
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
