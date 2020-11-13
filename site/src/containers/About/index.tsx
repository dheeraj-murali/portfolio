import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ProfileCard, ReviewCard } from "../../components"

export const About = () => {
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
      p="10"
      backgroundColor="orange.900"
      color="white"
    >
      <Heading as="h2" maxW="4xl" my="10">
        Hi there, I'm a{" "}
        <span style={{ color: "#FAF089" }}>
          Web designer and Front-end developer
        </span>{" "}
        who loves crafting fast and easy to use web applications.
      </Heading>

      <Text maxW="4xl">
        Dictum aenean maecenas porta risus, facilisis maecenas donec amet
        porttitor. Eu, odio vel eros, nibh arcu egestas quis. Nunc neque,
        pulvinar quam feugiat nunc. Non nibh quam viverra pellentesque gravida.
        Aliquet dui mauris morbi ornare commodo pulvinar eget porttitor. Risus,
        at nulla risus, amet lorem eleifend arcu in. Feugiat nisl amet, neque
        in. Enim massa vivamus sapien, arcu. Sit massa sit dui iaculis. Facilisi
        eu volutpat quam tortor, non. Maecenas turpis massa volutpat sit
        molestie a. Facilisis quis congue mauris proin eget eu. Bibendum
        tincidunt sed praesent sed.
      </Text>

      <ProfileCard profileImage={images.me.childImageSharp.fluid.src} />

      <Flex
        justifyContent="center"
        alignItems="center"
        w="full"
        h="lg"
        bg="purple.800"
        bgImg={`url(${images.background.childImageSharp.fluid.src})`}
      >
        <ReviewCard
          name="test user"
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti consectetur optio aut, unde dignissimos tempore ratione, voluptas suscipit placeat natus maxime! Modi, maiores vitae. Molestias ipsum cum error optio officiis?"
        />
        <ReviewCard
          name="test user"
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti consectetur optio aut, unde dignissimos tempore ratione, voluptas suscipit placeat natus maxime! Modi, maiores vitae. Molestias ipsum cum error optio officiis?"
        />
      </Flex>
    </Box>
  )
}
