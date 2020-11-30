import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { animated, useSpring } from "react-spring"
import { NetlifyContactForm } from "../../components/NetlifyContactForm"
import { ContactProps } from "../../types"
import { calcText, transText } from "../../utils"

export const Contact = (props: ContactProps) => {
  const { title } = props

  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 140 },
  }))

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/contact.png" }) {
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
    <Flex w="full" flexDir="column" justifyContent="center" alignItems="center">
      <Heading
        as="h2"
        fontSize="5xl"
        mt="20"
        lineHeight="3rem"
        fontWeight="regular"
      >
        {title}
      </Heading>
      <SimpleGrid columns={[1, null, 2]}>
        <Flex
          id="contact"
          w="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          px={{ base: "5", lg: "10", xl: "16" }}
          py="32"
        >
          <NetlifyContactForm formName="portfolio-contact" />
        </Flex>

        <Flex
          id="contact"
          w="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          px={{ base: "5", lg: "10", xl: "16" }}
          py="32"
        >
          <Box
            as={animated.div}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calcText(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            // @ts-ignore
            style={{ transform: spring.xys.interpolate(transText) }}
            w={{ base: "xs", md: "md", lg: "lg" }}
            mb="16"
          >
            <Img
              fluid={image.file.childImageSharp.fluid}
              alt={`${title} screenshot`}
              style={{ width: "100%" }}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
