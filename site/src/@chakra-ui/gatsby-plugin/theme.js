import { extendTheme } from "@chakra-ui/react"
const theme = {
  styles: {
    global: {
      ".mdx-prose": {
        p: {
          mt: "5",
        },
        h1: {
          fontSize: "4xl",
          fontWeight: "bolder",
          my: "5",
        },
        h2: {
          fontSize: "3xl",
          fontWeight: "bold",
          my: "5",
        },
        h3: {
          fontSize: "2xl",
          fontWeight: "bold",
          my: "5",
        },
        h4: {
          fontSize: "1xl",
          fontWeight: "bold",
          my: "3",
        },
        h5: {
          fontSize: "xl",
          fontWeight: "bold",
          my: "3",
        },
        h6: {
          fontSize: "lg",
          fontWeight: "bold",
          my: "3",
        },
        ul: {
          p: "3",
          ml: "5",
        },
        ol: {
          p: "3",
          ml: "5",
        },
        a: {
          textDecoration: "underline",
          color: "blue.500",
        },
        hr: {
          my: "5",
        },
      },
      img: {
        rounded: "lg",
      },
    },
  },
}

export default extendTheme(theme)
