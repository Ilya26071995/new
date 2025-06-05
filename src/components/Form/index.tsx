import React, { useState } from "react";
import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import cn from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../validations";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const [disabled, setDisabled] = useState(true);

  const clickFun = () => {
    setDisabled((prevdisabled) => !prevdisabled);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            <input onClick={clickFun} type="checkbox"></input>
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
          <input
            className={cn(
              !disabled && inputValue.length > 0 ? s.btn : s.false,
              s.btn
            )}
            type="submit"
            value="Отправить"
            disabled={disabled}
          />
        </div>
      </form>
    </div>
  );
};

export { Form };
