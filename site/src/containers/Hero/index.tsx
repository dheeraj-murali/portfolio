import { Box, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react"
import React from "react"
import { generateTitle } from "../../utils/index"

export const Hero = (props: HeroProps) => {
  const { title, body, image } = props
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
        <Heading
          as="h1"
          size="4xl"
          mb="10"
          dangerouslySetInnerHTML={{
            __html: generateTitle(title.text, title.highlight),
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
