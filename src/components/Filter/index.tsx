import React, { useState } from "react";
import s from "./Filter.module.scss";
import cn from "classnames";
import Select from "react-select";

const SELECTS = ["Материал 1", "Материал 2", "Материал 3", "Материал 4"];

const OPTIONS = [
  { value: "Материал 1", label: "Материал 1" },
  { value: "Материал 2", label: "Материал 2" },
  { value: "Материал 3", label: "Материал 3" },
  { value: "Материал 4", label: "Материал 4" },
];

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={s.filter}>
      <div className={s.filterHead}>
        <h1 className={s.filterTitle}>Материал основания</h1>
        <img src="../img/filterIcon.svg" alt="filter" />
      </div>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "20px",
          }),
          option: (base) => ({
            ...base,
            backgroundColor: "white",
            color: "#8e8f9b",
          }),
          container: () => ({
            width: "180px",
            border: "2px solid gray",
            borderRadius: "20px",
          }),
          menu: () => ({
            width: "180px",
            border: "none",
          }),
        }}
        defaultValue={selectedOption}
        options={OPTIONS}
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
