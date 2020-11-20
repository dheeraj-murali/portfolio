import { Icon } from "@chakra-ui/react"
import { FluidObject } from "gatsby-image"
import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

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
