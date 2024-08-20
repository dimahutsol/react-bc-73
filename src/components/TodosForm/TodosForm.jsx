import { ErrorMessage, Field, Form, Formik } from "formik";

import s from "./TodosForn.module.css";
import { validationSchema } from "helpers/validationSchema";
import { useDispatch } from "react-redux";
import { addTodo } from "reduxStore/todosSlice";
import { nanoid } from "nanoid";

const initialValues = {
  text: "",
};

export const TodosForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, options) => {
    dispatch(addTodo({ text: value.text, id: nanoid() }));
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
