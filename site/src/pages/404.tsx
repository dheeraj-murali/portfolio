import { Box, Flex, Heading, SlideFade, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default function notFound() {
  const image = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/404.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, placeholder: BLURRED, layout: FULL_WIDTH)
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
      <SlideFade offsetY={500} in={true}>
        <Box w="xs">
          <GatsbyImage
            image={image.file.childImageSharp.gatsbyImageData}
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
