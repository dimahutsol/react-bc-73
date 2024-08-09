import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./TodosForn.module.css";

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

export const ChangeTodoForm = ({ onSubmit, text }) => {
  const handleSubmit = (value, options) => {
    onSubmit(value.text);
    options.resetForm();
  };

  return (
    <Formik
      initialValues={{ text }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.box}>
          <Field name="text" type="text" />
          <button type="submit"> Change to do</button>
        </div>
        <ErrorMessage name="text" component="span" />
      </Form>
    </Formik>
  );
};
