import { Field, Form, Formik } from "formik";
import { Section, Container } from "components";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/auth/operation";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <Section>
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label>
              Email
              <Field type="email" name="email" />
            </label>

            <label>
              Password
              <Field type="password" name="password" />
            </label>

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </Container>
    </Section>
  );
};
