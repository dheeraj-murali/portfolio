import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { HeroProps } from "../../types"
import { generateTitle } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body } = props
  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }

  const hero = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/hero.png" }) {
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
      id="main"
      w="full"
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="32"
      color={textColor[colorMode]}
    >
      <Flex flexDir="column" justifyContent="space-between" maxW="md">
        <Heading
          as="h1"
          size="4xl"
          my="10"
          dangerouslySetInnerHTML={{
            __html: generateTitle(title.text, title.highlight, "#4299E1"),
          }}
        />
        <Text>{body}</Text>
      </Flex>
      <Box w="lg" h="lg">
        <Img
          fluid={hero.file.childImageSharp.fluid}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  )
}
