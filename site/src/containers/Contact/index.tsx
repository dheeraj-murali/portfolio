import { Flex, Heading, Image, Link } from "@chakra-ui/react"
import React from "react"
import { ContactProps } from "../../types"

export const Contact = (props: ContactProps) => {
  const { mail, title } = props
  return (
    <Flex
      w="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p={{ base: "5", lg: "10", xl: "16" }}
    >
      <Image src="/contact.svg" size="md" />

      <Flex flexDir="column" justifyContent="space-evenly" textAlign="center">
        <Heading as="h2" fontSize="5xl" mb="10">
          {title}
        </Heading>
        <Link href={`mailto:${mail}`} fontSize="3xl">
          {mail}
        </Link>
      </Flex>
    </Flex>
  )
}
