// import * as Yup from "yup";

// const phoneEx =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// export const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   phone: Yup.string().matches(phoneEx, "Phone number is not valid"),
//   message: Yup.string()
//     .min(5, "Too Short!")
//     .max(250, "Too Long!")
//     .required("Required"),
// });
