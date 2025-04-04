import React from "react";
import s from "./Filter.module.scss";
import cn from "classnames";

const SELECTS = ["Материал 1", "Материал 2", "Материал 3", "Материал 4"];

interface TitleType {
  filterTitle: string;
}

const Filter = ({ filterTitle }: TitleType) => {
  return (
    <div className={s.filter}>
      <div className={s.filterHead}>
        <h1 className={s.filterTitle}>Материал основания</h1>
        <img src="../img/filterIcon.svg" alt="filter" />
      </div>
      <form className={s.form}>
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
      </form>
    </div>
  );
};

export { Filter };
