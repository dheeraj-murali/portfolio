import {
  Box,
  Button,
  Flex,
  Heading,
  useColorMode,
  Image,
  Text,
} from "@chakra-ui/core"
import React from "react"

export const Hero = () => {
  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }

  return (
    <Flex
      w="full"
      justifyContent="space-evenly"
      alignItems="center"
      p="5"
      py={{ base: "5", lg: "20" }}
      color={textColor[colorMode]}
    >
      <Flex flexDir="column" justifyContent="space-evenly" maxW="md">
        <Heading as="h1" fontSize="6xl" mb="10">
          Hey, I'm a<span style={{ color: "#4299E1" }}> digital </span>
          product developer
        </Heading>
        <Text>
          Hi, I’m Dheeraj a Web designer and Front-end developer, who loves
          crafting fast and easy to use web applications.
        </Text>
      </Flex>
      <Box>
        <Image src="/hero.svg" size="lg" />
      </Box>
    </Flex>
  )
}

interface HeroProps {}
