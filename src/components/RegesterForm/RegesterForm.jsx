import { Field, Form, Formik } from "formik";
import { Section, Container } from "components";
import { useDispatch } from "react-redux";
import { register } from "reduxStore/auth/operation";

export const RegesterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));

    action.resetForm();
  };

  return (
    <Section>
      <Container>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label>
              Name
              <Field type="text" name="name" />
            </label>

            <label>
              Email
              <Field type="email" name="email" />
            </label>

            <label>
              Password
              <Field type="password" name="password" />
            </label>

            <button type="submit">Register</button>
          </Form>
        </Formik>
      </Container>
    </Section>
  );
};
