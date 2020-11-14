import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import { v4 as uuid } from "uuid"
import {
  ProfileCard,
  ReviewCard,
  ScrollAssist,
  scrollFn,
} from "../../components"
import { AboutProps } from "../../types"
import { generateTitle } from "../../utils"

export const About = (props: AboutProps) => {
  const { title, body, testimonials, profile } = props

  const container = useRef<HTMLDivElement>(null!)

  const images = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/client.png" }) {
        childImageSharp {
          fluid {
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

      me: file(relativePath: { eq: "images/me.jpeg" }) {
        childImageSharp {
          fluid {
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
    <Box
      id="about"
      w="100vw"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="32"
      backgroundColor="purple.900"
      color="white"
    >
      <Heading
        as="h2"
        maxW="4xl"
        mb="10"
        dangerouslySetInnerHTML={{
          __html: generateTitle(title.text, title.highlight, "#F6E05E"),
        }}
      />

      <Text maxW="4xl">{body}</Text>

      <ProfileCard {...profile} image={images.me.childImageSharp.fluid.src} />

      <Flex
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
      </Flex>
    </Box>
  )
}
