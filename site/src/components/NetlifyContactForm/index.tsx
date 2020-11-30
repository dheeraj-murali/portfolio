import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useFormik, FormikErrors } from "formik"
import React from "react"

export const encode = (data: FormValues) => {
  return Object.keys(data)
    .map(key => {
      // @ts-ignore
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    })
    .join("&")
}

export const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.name) {
    errors.name = "Required"
  } else if (values.name.length < 3) {
    errors.name = "Must be at least 3 characters or more"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.message) {
    errors.message = "Required"
  } else if (values.message.length < 5) {
    errors.message = "Must be at least 5 characters or more"
  }

  return errors
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export const NetlifyContactForm = (props: NetlifyContactFormProps) => {
  const { formName } = props

  const toast = useToast()

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...values }),
      })
        .then(() => {
          actions.setSubmitting(false)
          toast({
            position: "bottom-left",
            title: "Done!",
            description: "Your message send successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          actions.resetForm()
        })
        .catch(error => {
          actions.resetForm()
          toast({
            position: "bottom-left",
            title: "An error occurred.",
            description: "Unable to send message.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        })
    },
  })

  return (
    <form
      name={formName}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      style={{ width: "100%", height: "100%" }}
      method="post"
    >
      <VStack spacing={4}>
        <FormControl
          id="name"
          isRequired
          isInvalid={Boolean(formik.touched.name && formik.errors.name)}
        >
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorBorderColor="red.300"
            focusBorderColor="blue.500"
            borderColor="gray.500"
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          id="email"
          isRequired
          isInvalid={Boolean(formik.touched.email && formik.errors.email)}
        >
          <Input
            id="email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorBorderColor="red.300"
            focusBorderColor="blue.500"
            borderColor="gray.500"
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          <FormHelperText>
            I'll never share your email with anyone.
          </FormHelperText>
        </FormControl>

        <FormControl id="phone">
          <Input
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your phone number"
            type="phone"
            errorBorderColor="red.300"
            focusBorderColor="blue.500"
            borderColor="gray.500"
          />
        </FormControl>

        <FormControl
          id="message"
          isRequired
          isInvalid={Boolean(formik.touched.message && formik.errors.message)}
        >
          <Textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your message"
            resize="vertical"
            rounded="lg"
            focusBorderColor="blue.500"
            borderColor="gray.500"
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          isLoading={formik.isSubmitting}
          colorScheme="blue"
          type="submit"
        >
          Send message
        </Button>
      </VStack>
    </form>
  )
}

declare interface FormValues {
  name: string
  email: string
  phone: string
  message: string
  "form-name"?: string
}

declare interface NetlifyContactFormProps {
  formName: string
}
