import { ErrorMessage, Field, Form, Formik } from "formik";

import s from "./TodosForn.module.css";
import { validationSchema } from "helpers/validationSchema";
import { useDispatch } from "react-redux";
import { changeTodo, setCurrentTodo } from "reduxStore/todosSlice";

export const ChangeTodoForm = ({ text }) => {
  const dispatch = useDispatch();

  const handleSubmit = (value, options) => {
    dispatch(changeTodo(value.text));
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
          <button type="submit"> Change</button>
          <button type="button" onClick={() => dispatch(setCurrentTodo(null))}>
            Cancel
          </button>
        </div>
        <ErrorMessage name="text" component="span" />
      </Form>
    </Formik>
  );
};
