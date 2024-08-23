import { Field, Form, Formik } from "formik";
import { Section, Container } from "components";

export const RegesterForm = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
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
