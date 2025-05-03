import React, { useState } from "react";
import s from "./LeftForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check } from "../Check";
import * as yup from "yup";
import Select from "react-select";

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: 14,
    color: state.isFocused ? "white" : "#8E8F9B",
    backgroundColor: state.isFocused ? "#E93D07" : "white",
    textAlign: "center",
    borderRadius: 20,
    cursor: state.isFocused ? "pointer" : "",
  }),
  container: (provided: any, state: any) => ({
    ...provided,
    width: 200,
    padding: 0,
    borderRadius: 20,
    fontSize: 12,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 20,
    textAlign: "center",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 20,
  }),
};

const MATERIALS = [
  { value: "Материал 1", label: "Материал 1" },
  { value: "Материал 2", label: "Материал 2" },
  { value: "Материал 3", label: "Материал 3" },
  { value: "Материал 4", label: "Материал 4" },
];
const SIZES = [
  { value: "Размер 1", label: "Размер 1" },
  { value: "Размер 2", label: "Размер 2" },
  { value: "Размер 3", label: "Размер 3" },
  { value: "Размер 4", label: "Размер 4" },
];
const CHECK = [
  { title: "Квадратных метров, м2", text: "—" },
  { title: "Количество панелей, шт ", text: "—" },
];
const POSTCHECK = [
  { title: "Квадратных метров, м2", text: "10" },
  { title: "Количество панелей, шт ", text: "30" },
];

interface PropsType {
  title: string;
  text: string;
}

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
});

const LeftForm = () => {
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
  };

  const [click, setClick] = useState(true);

  const clickFun = () => {
    setClick((prevclick) => !prevclick);
    console.log(click);
  };

  const [DEFAULT, setDefault] = useState(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h2 className={s.miniTitle}>Задайте характеристики</h2>
      <label className={s.label}>
        Материал основания
        <br /> плиты
        <Select
          options={MATERIALS}
          defaultValue={DEFAULT}
          styles={customStyles}
          placeholder="ВЫБРАТЬ МАТЕРИАЛ"
        />
        {/* <select {...register("material")} className={s.select}>
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
        </select> */}
      </label>
      <label className={s.label}>
        Размер плиты
        <br /> Ш х В х Г, мм
        <Select
          options={SIZES}
          defaultValue={DEFAULT}
          styles={customStyles}
          placeholder="ВЫБРАТЬ РАЗМЕР"
        />
        {/* <select className={s.select} {...register("size")}>
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
        </select> */}
      </label>
      <label className={s.label}>
        Сколько панелей
        <br /> вы купили?
        <div className={s.miniFlex}>
          <input
            {...register("quantity")}
            type="number"
            placeholder="Количество панелей"
            className={s.input}
          />
          <p className={s.error}>{errors.quantity?.message}</p>
        </div>
      </label>
      <label className={s.label}>
        Сколько квадратных
        <br /> метров вы купили?
        <input className={s.input} type="number" {...register("meters")} />
      </label>
      <input
        className={s.btn}
        type="submit"
        value="Рассчитать"
        onClick={clickFun}
      />
      {click ? (
        <div>
          {CHECK.map(({ title, text }: PropsType, index) => {
            return <Check key={index} title={title} text={text} />;
          })}
        </div>
      ) : (
        <div>
          {POSTCHECK.map(({ title, text }: PropsType, index) => {
            return <Check key={index} title={title} text={text} />;
          })}
        </div>
      )}
    </form>
  );
};

export { LeftForm };
