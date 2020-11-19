import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

export default function Home() {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/404.png" }) {
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
      w="full"
      h="100vh"
      flexDir="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Box w="xs">
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt={`404`}
          style={{ width: "100%" }}
        />
      </Box>

      <Heading as="h1" size="4xl" fontWeight="regular">
        He has been Taken!!
      </Heading>
      <Text>404 page not found</Text>
    </Flex>
  )
}
