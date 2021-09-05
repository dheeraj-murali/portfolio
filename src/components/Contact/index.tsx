import { Button } from "components/common/Button";
import { TextInput } from "components/Contact/TextInput";
import { FaPaperPlane } from "react-icons/fa";
import { TextAreaInput } from "./TextArea";
import data from "Data/data.json";

const { contact } = data;

export function Contact() {
  return (
    <section id="contact" className="section">
      <div>
        <h2>{contact.title}</h2>
        <form className="max-w-md flex flex-col space-y-5">
          <TextInput
            label="Name"
            name="name"
            required
            placeholder="John Doe"
            autoComplete="on"
          />
          <TextInput
            label="Email"
            name="email"
            required
            placeholder="johndoe@somemail.com"
            autoComplete="on"
            legend={`I'll never share your email with anyone.`}
          />
          <TextInput
            label="Phone"
            name="phone"
            placeholder="+91 742301587"
            autoComplete="on"
          />

          <TextAreaInput
            label="Message"
            name="message"
            placeholder="Hey, yo! you are awesome..!!"
            spellCheck
            required
          />
          <Button onClick={() => {}} type="submit">
            <span>Send Message</span>
            <FaPaperPlane />
          </Button>
        </form>
      </div>
    </section>
  );
}
