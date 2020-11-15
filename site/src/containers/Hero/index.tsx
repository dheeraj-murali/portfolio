import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useToken,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { HeroProps } from "../../types"
import { generateTitle } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body } = props
  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }
  const [blue500] = useToken("colors", ["blue.500"])

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
      py="20"
      color={textColor[colorMode]}
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        maxW={{ base: "full", md: "sm" }}
      >
        <Heading
          as="h1"
          size="4xl"
          my="10"
          dangerouslySetInnerHTML={{
            __html: generateTitle(title.text, title.highlight, blue500),
          }}
        />
        <Text>{body}</Text>
      </Flex>
      <Box
        w={{ base: "xs", md: "md", xl: "xl" }}
        h={{ base: "xs", md: "md", xl: "xl" }}
      >
        <Img
          fluid={hero.file.childImageSharp.fluid}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  )
}
