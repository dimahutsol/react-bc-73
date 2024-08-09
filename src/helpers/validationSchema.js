import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
});
