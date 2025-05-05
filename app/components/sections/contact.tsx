"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const formName = "contact-from";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(500),
});

export type FormValues = z.infer<typeof formSchema>;

interface EncodeForm extends FormValues {
  "form-name": string;
}

export const encode = (data: EncodeForm) => {
  return Object.keys(data)
    .map((key) => {
      // @ts-ignore
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");
};

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...values,
      }),
    })
      .then(() => {
        toast.success("Your message send successfully!!");
        form.reset();
      })
      .catch(() => {
        toast.error("Oops! something went wrong.");
      });
  };

  return (
    <section id="contact" className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">Got some idea? Let's have a chat.</h2>
      <Form {...form}>
        <form
          name="contact-from"
          data-netlify="true"
          className="max-w-md flex flex-col space-y-5"
          onSubmit={form.handleSubmit(onSubmit)}
          method="POST"
        >
          <input type="hidden" name="form-name" value={"contact-from"} />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*'] gap-0">
                  Name
                </FormLabel>
                <FormControl>
                  <Input required autoComplete="on" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*'] gap-0">
                  Email
                </FormLabel>
                <FormControl>
                  <Input required autoComplete="on" {...field} />
                </FormControl>
                <FormDescription>
                  I'll never share your email with anyone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input autoComplete="on" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*'] gap-0">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea spellCheck required {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <span>Send Message</span>
            <Send className="size-4" />
          </Button>
        </form>
      </Form>
    </section>
  );
};
