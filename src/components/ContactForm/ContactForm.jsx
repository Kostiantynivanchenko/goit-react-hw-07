import { useFormik } from "formik";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "", number: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Обов'язкове до заповнення!"),
      number: Yup.string()
        .min(10, "Номер телефону має містити мінімум 10 символів")
        .matches(/^[0-9]+$/, "Номер телефону може містити тільки цифри")
        .required("Обов'язкове до заповнення!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.contactForm}>
      <label>
        Name
        <input
          className={s.contactInput}
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={s.error}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Number
        <input
          className={s.contactInput}
          type="text"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={s.error}>{formik.errors.number}</div>
        ) : null}
      </label>
      <button className={s.addButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
