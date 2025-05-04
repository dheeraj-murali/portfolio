"use client";

import { Send } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">Got some idea? Let's have a chat.</h2>
      <form
        name="contact-from"
        data-netlify="true"
        className="max-w-md flex flex-col space-y-5"
        onSubmit={handleSubmit}
        method="POST"
      >
        <input type="hidden" name="form-name" value={"contact-from"} />
        <Input
          name="name"
          required
          placeholder="John Doe"
          autoComplete="on"
          //     value={values.name}
          //     onChange={handleChange}
        />
        <Input
          name="email"
          required
          placeholder="johndoe@somemail.com"
          autoComplete="on"
          //     value={values.email}
          //     onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="+91 742301587"
          autoComplete="on"
          //     value={values.phone}
          //     onChange={handleChange}
        />

        <Textarea
          name="message"
          placeholder="Hey, yo! you are awesome..!!"
          spellCheck
          required
          //     value={values.message}
          //     onChange={handleChange}
        />
        <Button onClick={() => {}} type="submit">
          <span>Send Message</span>
          <Send className="size-4" />
        </Button>
      </form>
    </section>
  );
};
