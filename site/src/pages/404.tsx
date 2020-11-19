import { Box, Flex, Heading, Slide, SlideFade, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Img from "gatsby-image"

export default function notFound() {
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
    }, 1500)
  }, [])

  return (
    <Flex
      w="full"
      h="100vh"
      flexDir="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <SlideFade offsetY={500} in={isOpen}>
        <Box w="xs">
          <Img
            fluid={image.file.childImageSharp.fluid}
            alt={`404`}
            style={{ width: "100%" }}
          />
        </Box>
      </SlideFade>

      <Heading as="h1" size="4xl" fontWeight="regular">
        He has been Taken!!
      </Heading>
      <Text>404 page not found</Text>
    </Flex>
  )
}
