import { Field, Form, Formik } from "formik";
import { Section, Container } from "components";

export const LoginForm = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
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
