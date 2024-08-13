import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./SearchPhotos.module.css";

const searchFormSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Too short")
    .max(20, "Too long")
    .required("The field is required"),
});

export const SearchPhotos = ({ onSearchSubmit }) => {
  const handleSubmit = (values, options) => {
    onSearchSubmit(values.search);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        validationSchema={searchFormSchema}
      >
        <Form className={css.form}>
          <Field name="search" />
          <ErrorMessage name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
