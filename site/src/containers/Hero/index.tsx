import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  Text,
  useColorMode,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { animated, useSpring } from "react-spring"
import { HeroProps } from "../../types"
import { calcImage, generateTitle } from "../../utils/index"

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`

export const Hero = (props: HeroProps) => {
  const { title, body } = props

  const [springImage, setImage] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 350, friction: 100 },
  }))

  const titleColor = useColorModeValue("gray.600", "gray.200")
  const textColor = useColorModeValue("gray.600", "gray.400")
  const [blue] = useToken("colors", ["blue.500"])

  const image = useStaticQuery(graphql`
    {
      heroMe: file(relativePath: { eq: "images/hero/heroMe.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      heroChair: file(relativePath: { eq: "images/hero/heroChair.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      heroBg: file(relativePath: { eq: "images/hero/heroBg.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
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
      py="10"
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
            color={titleColor}
            dangerouslySetInnerHTML={{
              __html: generateTitle(title.text, title.highlight, blue),
            }}
          />
          <Text color={textColor}>{body}</Text>
        </ScaleFade>
      </Flex>
      <Box
        w={{ base: "xs", md: "md", xl: "xl" }}
        h={{ base: "xs", md: "md", xl: "xl" }}
        position="relative"
      >
        <Box
          onDragStart={e => {
            e.preventDefault()
          }}
          as={animated.div}
          p="0"
          m="0"
          w="full"
          h="full"
          style={{
            // @ts-ignore
            transform: springImage.xy.interpolate(trans1),
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
        >
          <GatsbyImage
            image={image.heroBg.childImageSharp.gatsbyImageData}
            alt={`${title} screenshot`}
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Box
          onDragStart={e => {
            e.preventDefault()
          }}
          as={animated.div}
          p="0"
          m="0"
          w="full"
          h="full"
          style={{
            // @ts-ignore
            transform: springImage.xy.interpolate(trans2),
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
        >
          <GatsbyImage
            image={image.heroChair.childImageSharp.gatsbyImageData}
            alt={`${title} screenshot`}
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Box
          onDragStart={e => {
            e.preventDefault()
          }}
          as={animated.div}
          p="0"
          m="0"
          w="full"
          h="full"
          style={{
            // @ts-ignore
            transform: springImage.xy.interpolate(trans3),
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
        >
          <GatsbyImage
            image={image.heroMe.childImageSharp.gatsbyImageData}
            alt={`${title} screenshot`}
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Flex>
  )
}
