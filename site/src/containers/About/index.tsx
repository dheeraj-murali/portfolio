import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { ProfileCard, ReviewCard } from "../../components"
import { AboutProps } from "../../types"
import { generateTitle } from "../../utils"

export const About = (props: AboutProps) => {
  const { title, body, testimonials, profile } = props
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
      id="service"
      w="100vw"
      p="5"
      backgroundColor="orange.900"
      color="white"
    >
      <Heading
        as="h2"
        maxW="4xl"
        mb="10"
        dangerouslySetInnerHTML={{
          __html: generateTitle(title.text, title.highlight, "#FAF089"),
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
      >
        <Flex overflow="scroll" w="full">
          {testimonials.map(review => (
            <ReviewCard {...review} key={uuid()} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
