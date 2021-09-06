import { Button } from "components/common/Button";
import { TextInput } from "components/Contact/TextInput";
import { FaPaperPlane } from "react-icons/fa";
import { TextAreaInput } from "./TextArea";
import data from "data/data.json";
import { useFormik } from "formik";
import { ContactSchema } from "./scheme";
import { encode } from "./encodeForm";
import { toast } from "react-toastify";

const { contact } = data;
const formName = "contact-from";

export function Contact() {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formName,
          ...values,
        }),
      })
        .then(() => {
          actions.setSubmitting(false);
          toast("Your message send successfully!!", {
            toastId: formName,
            autoClose: 3000,
            position: "bottom-left",
            theme:
              (localStorage.getItem("theme") as "light" | "dark") || "light",
            type: "success",
          });
          actions.resetForm();
        })
        .catch(() => {
          actions.resetForm();
          actions.setSubmitting(false);
          toast("Oops! something went wrong.", {
            toastId: formName,
            autoClose: 3000,
            position: "bottom-left",
            theme:
              (localStorage.getItem("theme") as "light" | "dark") || "light",
            type: "error",
          });
        });
    },
  });

  return (
    <section id="contact" className="section">
      <div>
        <h2>{contact.title}</h2>
        <form
          name={formName}
          data-netlify="true"
          className="max-w-md flex flex-col space-y-5"
          onSubmit={handleSubmit}
          method="POST"
        >
          <input type="hidden" name="form-name" value={formName} />
          <TextInput
            label="Name"
            name="name"
            required
            placeholder="John Doe"
            autoComplete="on"
            value={values.name}
            onChange={handleChange}
            error={touched.name ? errors.name : ""}
          />
          <TextInput
            label="Email"
            name="email"
            required
            placeholder="johndoe@somemail.com"
            autoComplete="on"
            legend={`I'll never share your email with anyone.`}
            value={values.email}
            onChange={handleChange}
            error={touched.email ? errors.email : ""}
          />
          <TextInput
            label="Phone"
            name="phone"
            placeholder="+91 742301587"
            autoComplete="on"
            value={values.phone}
            onChange={handleChange}
            error={touched.phone ? errors.phone : ""}
          />

          <TextAreaInput
            label="Message"
            name="message"
            placeholder="Hey, yo! you are awesome..!!"
            spellCheck
            required
            value={values.message}
            onChange={handleChange}
            error={touched.message ? errors.message : ""}
          />
          <Button onClick={() => {}} type="submit" label="submit from">
            <span>Send Message</span>
            <FaPaperPlane />
          </Button>
        </form>
      </div>
    </section>
  );
}
