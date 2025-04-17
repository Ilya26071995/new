import React from "react";
import s from "./Calculation.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MATERIALS = ["Материал 1", "Материал 2", "Материал 3", "Материал 4"];
const SIZES = ["s", "m", "l", "xl"];

const schema = yup.object({
  material: yup.string(),
  size: yup.string(),
  quantity: yup
    .string()
    .required("Укажите количество панелей")
    .matches(/([0-9])/, "Только цифры"),
  meters: yup
    .string()
    .required("Укажите количество квадратных метров")
    .matches(/([0-9])/, "Только цифры"),
  //   sum: yup
  //     .string()
  //     .required("Укажите количество панелей")
  //     .matches(/([0-9])/, "Только цифры"),
});

const Calculation = () => {
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
      <h2 className={s.title}>Расчет материалов</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h2 className={s.miniTitle}>Задайте характеристики</h2>
        <label className={s.label}>
          Материал основания
          <br /> плиты
          <select {...register("material")} className={s.select}>
            <option className={s.option} hidden>
              Выбрать материал
            </option>
            {MATERIALS.map((material, index) => {
              return (
                <option className={s.option} key={index}>
                  {material}
                </option>
              );
            })}
          </select>
        </label>
        <label className={s.label}>
          Размер плиты
          <br /> Ш х В х Г, мм
          <select className={s.select} {...register("size")}>
            <option className={s.option} hidden>
              Выбрать размер
            </option>
            {SIZES.map((size, index) => {
              return (
                <option className={s.option} key={index}>
                  {size}
                </option>
              );
            })}
          </select>
        </label>
        <label className={s.label}>
          Сколько панелей
          <br /> вы купили?
          <input
            {...register("quantity")}
            type="number"
            placeholder="Количество панелей"
            className={s.input}
          />
          <p>{errors.quantity?.message}</p>
        </label>
        <label className={s.label}>
          Сколько квадратных
          <br /> метров вы купили?
          <input className={s.input} type="number" {...register("meters")} />
        </label>
        <input className={s.btn} type="submit" value="Расчищать" />
      </form>
    </div>
  );
};

export { Calculation };
