import { Icon, Tooltip } from "@chakra-ui/react"
import { FormikErrors } from "formik"
import { FluidObject } from "gatsby-image"
import React from "react"
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaPaintBrush,
  FaReact,
  FaSearchPlus,
  FaTwitterSquare,
} from "react-icons/fa"
import {
  SiGatsby,
  SiGraphql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { CgBolt } from "react-icons/cg"
import { FormValues } from "../types"

export const generateTitle = (
  text: string,
  highlight: string,
  color: string
) => {
  return text.replace(
    highlight,
    `<span style="color:${color}">${highlight}</span>`
  )
}

export const getService = (service: string) => {
  switch (service) {
    case "GitHub":
      return <Icon as={FaGithubSquare} w="6" h="6" />
    case "LinkedIn":
      return <Icon as={FaLinkedin} w="6" h="6" />
    case "Twitter":
      return <Icon as={FaTwitterSquare} w="6" h="6" />
    default:
      return null
  }
}

export const getIcons = (service: string) => {
  switch (service) {
    case "Design":
      return <Icon as={FaPaintBrush} w="10" h="10" />
    case "Development":
      return <Icon as={FaCode} w="10" h="10" />
    case "SEO":
      return <Icon as={FaSearchPlus} w="10" h="10" />
    default:
      return null
  }
}

export const getFluid = (
  edges: any,
  image: string
): FluidObject | FluidObject[] => {
  let fluid: FluidObject | FluidObject[]

  edges.forEach(edge => {
    if (edge.node.name === image) fluid = edge.node.childImageSharp.fluid
  })

  return fluid
}

export const getSrc = (edges: any, image: string): string => {
  let src: string

  edges.forEach(edge => {
    if (edge.node.name === image) src = edge.node.childImageSharp.fluid.src
  })

  return src
}

export const calcText = (x, y) => [
  -(y - window.innerHeight / 5) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.1,
]

export const calcImage = (x, y) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]

export const transText = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const transImage = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

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

export const getTechIcons = (tech: string) => {
  switch (tech) {
    case "react":
      return (
        <Tooltip hasArrow label="ReactJS" placement="top" shouldWrapChildren>
          <Icon
            aria-label="ReactJS"
            as={FaReact}
            boxSize="6"
            color="blue.500"
          />
        </Tooltip>
      )

    case "html":
      return (
        <Tooltip hasArrow label="HTML" placement="top" shouldWrapChildren>
          <Icon aria-label="HTML" as={FaHtml5} boxSize="6" color="orange.500" />
        </Tooltip>
      )

    case "css":
      return (
        <Tooltip hasArrow label="CSS" placement="top" shouldWrapChildren>
          <Icon aria-label="CSS" as={FaCss3Alt} boxSize="6" color="blue.500" />
        </Tooltip>
      )

    case "js":
      return (
        <Tooltip hasArrow label="JS" placement="top" shouldWrapChildren>
          <Icon aria-label="JS" as={FaJs} boxSize="6" color="yellow.500" />
        </Tooltip>
      )

    case "bootstrap":
      return (
        <Tooltip hasArrow label="Bootstrap" placement="top" shouldWrapChildren>
          <Icon
            aria-label="Bootstrap"
            as={FaBootstrap}
            boxSize="6"
            color="purple.500"
          />
        </Tooltip>
      )

    case "gatsby":
      return (
        <Tooltip hasArrow label="GatsbyJS" placement="top" shouldWrapChildren>
          <Icon
            aria-label="GatsbyJS"
            as={SiGatsby}
            boxSize="6"
            color="purple.500"
          />
        </Tooltip>
      )

    case "graphql":
      return (
        <Tooltip hasArrow label="GraphQL" placement="top" shouldWrapChildren>
          <Icon
            aria-label="GraphQL"
            as={SiGraphql}
            boxSize="6"
            color="pink.500"
          />
        </Tooltip>
      )

    case "tailwind":
      return (
        <Tooltip
          hasArrow
          label="Tailwind CSS"
          placement="top"
          shouldWrapChildren
        >
          <Icon
            aria-label="Tailwind CSS"
            as={SiTailwindcss}
            boxSize="6"
            color="teal.500"
          />
        </Tooltip>
      )

    case "typescript":
      return (
        <Tooltip hasArrow label="Typescript" placement="top" shouldWrapChildren>
          <Icon
            aria-label="Typescript"
            as={SiTypescript}
            boxSize="6"
            color="blue.500"
          />
        </Tooltip>
      )

    case "chakra":
      return (
        <Tooltip hasArrow label="Chakra UI" placement="top" shouldWrapChildren>
          <Icon
            aria-label="Chakra UI"
            bg="green.500"
            rounded="full"
            as={CgBolt}
            boxSize="6"
            color="white"
          />
        </Tooltip>
      )

    default:
      return null
  }
}
