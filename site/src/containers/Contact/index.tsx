import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { ContactProps } from "../../types"

export const Contact = (props: ContactProps) => {
  const { mail, title } = props

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/contact.png" }) {
        childImageSharp {
          fluid(pngQuality: 90) {
            aspectRatio
            base64
            src
            srcSet
            sizes
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <Flex
      id="contact"
      w="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="32"
    >
      <Box w={{ base: "xs", md: "md", lg: "lg" }} mb="16">
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt={`${title} screenshot`}
          style={{ width: "100%" }}
        />
      </Box>

      <Flex flexDir="column" justifyContent="space-evenly" textAlign="center">
        <Heading
          as="h2"
          fontSize="5xl"
          mb="10"
          lineHeight="3rem"
          fontWeight="regular"
        >
          {title}
        </Heading>
        <Link href={`mailto:${mail}`} fontSize="3xl">
          {mail}
        </Link>
      </Flex>
    </Flex>
  )
}
