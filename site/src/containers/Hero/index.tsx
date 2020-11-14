import { Box, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react"
import React from "react"
import { HeroProps } from "../../types"
import { generateTitle } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body, image } = props
  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }

  return (
    <Flex
      id="main"
      w="full"
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      p="5"
      py="12"
      color={textColor[colorMode]}
    >
      <Flex flexDir="column" justifyContent="space-evenly" maxW="md">
        <Heading
          as="h1"
          size="4xl"
          mb="10"
          dangerouslySetInnerHTML={{
            __html: generateTitle(title.text, title.highlight, "#4299E1"),
          }}
        />
        <Text>{body}</Text>
      </Flex>
      <Box>
        <Image src={`/${image}`} size="lg" />
      </Box>
    </Flex>
  )
}
