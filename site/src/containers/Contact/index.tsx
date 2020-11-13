import { Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/core"
import React from "react"

export const Contact = () => {
  return (
    <Flex
      w="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p="5"
      py={{ base: "5", lg: "20" }}
    >
      <Image src="/contact.svg" size="md" />

      <Flex flexDir="column" justifyContent="space-evenly" textAlign="center">
        <Heading as="h2" fontSize="5xl" mb="10">
          Got a project? Let's talk
        </Heading>
        <Text fontSize="3xl">410dheeraj@gmail.com</Text>
      </Flex>
    </Flex>
  )
}
