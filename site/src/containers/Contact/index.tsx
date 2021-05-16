import { Flex, Heading, useColorModeValue } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { NetlifyContactForm } from "../../components/NetlifyContactForm"
import { ContactProps } from "../../types"

export const Contact = (props: ContactProps) => {
  const { title } = props

  const image = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/contact.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `)

  const titleColor = useColorModeValue("gray.600", "gray.400")
  const bgColor = useColorModeValue("gray.50", "gray.900")

  return (
    <Flex
      w="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
    >
      <Heading
        as="h2"
        fontSize="5xl"
        mt="20"
        textAlign="center"
        lineHeight="3rem"
        color={titleColor}
      >
        {title}
      </Heading>

      <Flex
        id="contact"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        py="10"
      >
        <NetlifyContactForm formName="portfolio-contact" />
      </Flex>
    </Flex>
  )
}
