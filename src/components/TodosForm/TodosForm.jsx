import { ErrorMessage, Field, Form, Formik } from "formik";

import s from "./TodosForn.module.css";
import { validationSchema } from "helpers/validationSchema";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reduxStore/actions";

const initialValues = {
  text: "",
};

export const TodosForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const handleSubmit = (value, options) => {
    dispatch(addTodo(value.text));
    // onSubmit(value.text);
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.box}>
          <Field name="text" type="text" />
          <button type="submit"> Add to do</button>
        </div>
        <ErrorMessage name="text" component="span" />
      </Form>
    </Formik>
  );
};
