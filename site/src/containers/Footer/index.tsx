import { Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/core"
import React from "react"

export const Footer = () => {
  return (
    <Flex
      w="full"
      h="md"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p="5"
      py={{ base: "5", lg: "20" }}
      bg="teal.900"
    ></Flex>
  )
}
