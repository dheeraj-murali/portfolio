import { Icon } from "@chakra-ui/react"
import { FluidObject } from "gatsby-image"
import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export const generateTitle = (text: string, highlight: string) => {
  return text.replace(
    highlight,
    `<span style="color:#4299E1">${highlight}</span>`
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
