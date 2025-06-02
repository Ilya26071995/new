import * as yup from "yup";

const ModalSchema = yup.object({
  material: yup.string(),
  size: yup.string(),
  name: yup
    .string()
    .required("Укажите имя")
    .matches(/([aA-zZаА-яЯ])/, "Только буквы"),
  phone: yup
    .string()
    .required("Укажите номер телефона")
    .matches(/([0-9])/, "Только цифры"),
});

const LeftSchema = yup.object({
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

const RightSchema = yup.object({
  material: yup.string(),
  size: yup.string(),
  quantity: yup
    .string()
    .required("Укажите количество панелей")
    .matches(/([0-9])/, "Только цифры"),
});

const FormSchema = yup.object({
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

export { ModalSchema, LeftSchema, RightSchema, FormSchema };
