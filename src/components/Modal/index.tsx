import React from "react";
import s from "./Modal.module.scss";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalSchema } from "../../validations";

interface PropsType {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ active, setActive }: PropsType) => {
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ModalSchema),
  });

  return (
    <div
      className={cn(active ? s.modal && s.active : s.modal)}
      onClick={() => setActive(!active)}
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1 className={s.modalTitle}>Заказать звонок</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} id="form">
          <div className={s.cont}>
            <label className={s.label}>
              Ваше имя
              <input className={s.input} type="text" {...register("name")} />
            </label>
            <p className={s.error}>{errors.name?.message}</p>
          </div>
          <div className={s.cont}>
            <label className={s.label}>
              Ваш номер телефона
              <input className={s.input} type="text" {...register("phone")} />
            </label>
            <p className={s.error}>{errors.phone?.message}</p>
          </div>
          <div className={s.buttons}>
            <input
              type="submit"
              className={s.button}
              value="Заказать звонок"
              form="form"
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Modal };
