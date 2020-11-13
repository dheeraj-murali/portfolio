import { Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export const Card = (props: CardProps) => {
  const { title, body, color, image } = props

  const bg = useColorModeValue(`${color}.200`, `${color}.800`)
  const titleColor = useColorModeValue(`${color}.800`, `${color}.200`)

  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      w="full"
      h="full"
      rounded="sm"
      p="5"
      shadow="lg"
      bg={bg}
      _hover={{ boxShadow: "outline" }}
    >
      <Flex w={{ base: "full", md: "50%" }} flexDir="column">
        <Heading as="h3" size="lg" color={titleColor}>
          {title}
        </Heading>

        <Text py="5">{body}</Text>
      </Flex>

      <Image
        src={`/${image}`}
        boxSize={{ base: "150px", lg: "200px" }}
        objectFit="cover"
        alt={title}
        my={{ base: "5", md: "0" }}
      />
    </Flex>
  )
}
