import React, { useState } from "react";
import s from "./Filter.module.scss";
import Select from "react-select";

const OPTIONS = [
  { value: "Материал 1", label: "Материал 1" },
  { value: "Материал 2", label: "Материал 2" },
  { value: "Материал 3", label: "Материал 3" },
  { value: "Материал 4", label: "Материал 4" },
];

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
    width: 220,
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

const Filter = () => {
  const [DEFAULT, setDefault] = useState(null);

  return (
    <div className={s.filter}>
      <div className={s.filterHead}>
        <h1 className={s.filterTitle}>Материал основания</h1>
        <img src="../img/filterIcon.svg" alt="filter" />
      </div>
      <Select
        defaultValue={DEFAULT}
        options={OPTIONS}
        styles={customStyles}
        placeholder="ВЫБРАТЬ МАТЕРИАЛ"
      />
      {/* <form className={s.form}>
        <label htmlFor="material"></label>
        <select
          className={cn(s.options, s.select)}
          id="material"
          name="material"
        >
          <option className={s.options} hidden>
            {filterTitle}
          </option>
          {SELECTS.map((select, index) => {
            return (
              <option className={s.options} key={index}>
                {select}
              </option>
            );
          })}
        </select>
      </form> */}
    </div>
  );
};

export { Filter };
