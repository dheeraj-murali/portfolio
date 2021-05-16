import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ProfileCard } from "../../components"
import { AboutProps } from "../../types"
import { generateTitle } from "../../utils"

export const About = (props: AboutProps) => {
  const { title, body, profile } = props

  const images = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "images/client.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      me: file(relativePath: { eq: "images/me.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: JPG
          )
        }
      }
    }
  `)

  const [color] = useToken("colors", ["blue.500"])
  const titleColor = useColorModeValue("gray.600", "gray.400")
  const bgColor = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.500", "gray.500")

  return (
    <Box
      id="about"
      w="full"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="32"
      bg={bgColor}
    >
      <Heading
        as="h2"
        maxW="4xl"
        mb="10"
        color={titleColor}
        dangerouslySetInnerHTML={{
          __html: generateTitle(title.text, title.highlight, color),
        }}
      />

      <Text maxW="4xl" color={textColor}>
        {body}
      </Text>

      <ProfileCard
        {...profile}
        image={images.me.childImageSharp.gatsbyImageData.images.fallback.src}
      />

      {/* Testimonies */}

      {/* <Flex
        bg="purple.800"
        bgImg={`url(${images.background.childImageSharp.fluid.src})`}
        h="lg"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Flex overflow="scroll" w="full" ref={container} mb="10">
          {testimonials.map(review => (
            <ReviewCard {...review} key={uuid()} />
          ))}
        </Flex>

        <ScrollAssist
          leftClickFn={() => scrollFn(container, 450, "l")}
          rightClickFn={() => scrollFn(container, 450, "r")}
        />
      </Flex> */}
    </Box>
  )
}
