import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  Text,
  useColorMode,
  useToken,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { animated, useSpring } from "react-spring"
import { HeroProps } from "../../types"
import { calcImage, generateTitle, transImage } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body } = props

  const [springImage, setImage] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 350, friction: 100 },
  }))

  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }
  const [blue500] = useToken("colors", ["blue.500"])

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
      onMouseMove={({ clientX: x, clientY: y }) =>
        setImage({ xy: calcImage(x, y) })
      }
    >
      <Flex
        as={animated.div}
        flexDir="column"
        justifyContent="space-between"
        maxW={{ base: "full", md: "sm" }}
      >
        <ScaleFade initialScale={0.5} in={true}>
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
        </ScaleFade>
      </Flex>
      <Box
        as={animated.div}
        w={{ base: "xs", md: "md", xl: "xl" }}
        // @ts-ignore
        style={{ transform: springImage.xy.interpolate(transImage) }}
      >
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt={`${title} screenshot`}
          style={{ width: "100%" }}
        />
      </Box>
    </Flex>
  )
}
