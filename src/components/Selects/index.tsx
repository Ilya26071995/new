import React, { useState } from "react";
import s from "./Selects.module.scss";
import { Button } from "../Button";
import Select from "react-select";

const SIZES = [
  { value: "Размер 1", label: "Размер 1" },
  { value: "Размер 2", label: "Размер 2" },
  { value: "Размер 3", label: "Размер 3" },
  { value: "Размер 4", label: "Размер 4" },
];

const MATERIALS = [
  { value: "Материал 1", label: "Материал 1" },
  { value: "Материал 2", label: "Материал 2" },
  { value: "Материал 3", label: "Материал 3" },
  { value: "Материал 4", label: "Материал 4" },
];

const COATING = [
  { value: "гсп", label: "гсп" },
  { value: "гкл", label: "гкл" },
  { value: "смл", label: "смл" },
  { value: "гвл", label: "гвл" },
];

interface ArrayType {
  mip: string[];
  title: string;
}
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

const Selects = () => {
  const [defaultValue, setDefaultValue] = useState(null);
  const handleChange = (defaultValue: any) => {
    setDefaultValue(defaultValue);
    console.log(defaultValue);
  };
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Select
          options={MATERIALS}
          defaultValue={defaultValue}
          styles={customStyles}
          placeholder="ВЫБРАТЬ МАТЕРИАЛ"
          onChange={handleChange}
        />
        <Select
          options={SIZES}
          defaultValue={defaultValue}
          styles={customStyles}
          placeholder="ВЫБРАТЬ РАЗМЕР"
          onChange={handleChange}
        />
        <Select
          options={COATING}
          defaultValue={defaultValue}
          styles={customStyles}
          placeholder="ВЫБРАТЬ ПОКРЫТИЕ"
          onChange={handleChange}
        />
      </div>

      <Button style="send">ОСТАВИТЬ ЗАЯВКУ</Button>
    </div>
  );
};

export { Selects };
