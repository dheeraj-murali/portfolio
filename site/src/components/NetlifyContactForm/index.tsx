import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  useColorMode,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { FormikErrors, useFormik } from "formik"
import React, { useState } from "react"
import Recaptcha from "react-google-recaptcha"
import { FormValues, NetlifyContactFormProps } from "../../types"

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY

if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your environment variables. 
  `)
}

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

  if (!values.phone) {
    errors.phone = ""
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g.test(
      values.phone
    )
  ) {
    errors.phone = "Invalid phone number"
  }

  if (values.bot) {
    errors.message = "Are you a bot?"
  }

  return errors
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  bot: "",
}

export const NetlifyContactForm = (props: NetlifyContactFormProps) => {
  const { formName } = props

  const reCaptchaRef = React.createRef<any>()

  const [formDisabled, setFormDisabled] = useState<boolean>(false)

  const { colorMode } = useColorMode()

  const bgColor = useColorModeValue("white", "gray.800")

  const handleReCaptchaError = () => {
    setFormDisabled(true)
    toast({
      position: "bottom-left",
      title: `reCAPTCHA didn't load`,
      description:
        "reCAPTCHA didn't load, you may not be able to submit the contact form right now. Try reloading the page",
      status: "warning",
      duration: 9000,
      isClosable: true,
    })
  }

  const handleReCaptchaLoad = () => {
    setFormDisabled(false)
  }

  const toast = useToast()

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, actions) => {
      const recaptchaValue = reCaptchaRef.current.getValue()

      if (recaptchaValue) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": formName,
            "g-recaptcha-response": recaptchaValue,
            ...values,
          }),
        })
          .then(() => {
            actions.setSubmitting(false)
            toast({
              position: "bottom-left",
              title: "Thank you!",
              description: "Got your message. I'll get back to you ASAP.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
            actions.resetForm()
          })
          .catch(error => {
            actions.resetForm()
            actions.setSubmitting(false)
            toast({
              position: "bottom-left",
              title: "An error occurred.",
              description: "Unable to send message.",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          })
      } else {
        actions.setSubmitting(false)
        toast({
          position: "bottom-left",
          title: `Forgot something?`,
          description: "Please complete the reCAPTCHA",
          status: "warning",
          duration: 9000,
          isClosable: true,
        })
      }
    },
  })

  return (
    <form
      name={formName}
      data-netlify="true"
      data-netlify-recaptcha="true"
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
            bg={bgColor}
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
            bg={bgColor}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          <FormHelperText>
            I'll never share your email with anyone.
          </FormHelperText>
        </FormControl>

        <FormControl id="phone" isInvalid={Boolean(formik.errors.phone)}>
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
            bg={bgColor}
          />
          <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
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
            bg={bgColor}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Flex w="full" justifyContent="center" alignItems="center">
          <Recaptcha
            ref={reCaptchaRef}
            sitekey={RECAPTCHA_KEY}
            onErrored={handleReCaptchaError}
            asyncScriptOnLoad={handleReCaptchaLoad}
            theme={colorMode}
          />
        </Flex>

        <Button
          isLoading={formik.isSubmitting}
          colorScheme="blue"
          type="submit"
          isDisabled={formDisabled}
        >
          Send message
        </Button>
      </VStack>
    </form>
  )
}
