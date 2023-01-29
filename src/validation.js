import * as yup from "yup";

export let formSchema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "must contain minimum 2 character")
    .max(12, "must contain max 12 character"),
  email: yup
    .string()
    .email("enter correct email address")
    .required("enter your email "),

  number: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),

  password: yup.string().required("enter your password"),
});
