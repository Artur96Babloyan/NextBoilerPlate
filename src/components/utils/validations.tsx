
import * as Yup from "yup";
import "yup-phone";

export const DrawerSchemaOptions = {
 FirstName: Yup.string()
   .required("First name is required.")
   .min(2, "This name is too short.")
   .max(50, "This name is too long."),
 LastName: Yup.string()
   .required("Last name is required.")
   .min(2, "This name is too short.")
   .max(50, "This name is too long."),
 Email: Yup.string()
   .required("We require a valid email address.")
   .email("This email address is invalid."),
 Phone: Yup.string()
   .required("We require a valid Australian phone number")
   .phone("AU", true, "Please enter a valid Australian phone number."),
   PostCode: Yup.string()
   .required("A postcode is required.")
   .matches(/^[0-9]+$/, "Must be only digits")
   .min(4, "Must be exactly 4 digits")
   .max(4, "Must be exactly 4 digits"),
};
