import {
  Box,
  Flex,
  Heading,
  SlideFade,
  Text,
  useColorMode,
  useToken,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, useState } from "react"
import { HeroProps } from "../../types"
import { generateTitle } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body } = props
  const [isOpen, setIsOpen] = useState(false)

  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }
  const [blue500] = useToken("colors", ["blue.500"])

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
    }, 200)
  }, [])

  const image = useStaticQuery(graphql`
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
        <SlideFade in={true} offsetY={2000}>
          <Heading
            as="h1"
            size="4xl"
            my="10"
            fontWeight="regular"
            dangerouslySetInnerHTML={{
              __html: generateTitle(title.text, title.highlight, blue500),
            }}
          />
          <Text>{body}</Text>
        </SlideFade>
      </Flex>
      <Box w={{ base: "xs", md: "md", xl: "xl" }}>
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt={`${title} screenshot`}
          style={{ width: "100%" }}
        />
      </Box>
    </Flex>
  )
}
