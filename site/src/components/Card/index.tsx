import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { CardProps } from "../../types"
import { getIcons } from "../../utils"

export const Card = (props: CardProps) => {
  const { title, color, body } = props

  const titleColor = useColorModeValue(`${color}.500`, `${color}.200`)
  const textColor = useColorModeValue("gray.600", "gray.400")
  const iconColor = useColorModeValue(`${color}.800`, `${color}.800`)

  return (
    <VStack align="flex-start" w="full" minH="2xs" p="5">
      <Box
        p="5"
        my="3"
        bg={`${color}.200`}
        rounded="lg"
        shadow="lg"
        color={iconColor}
      >
        {getIcons(title)}
      </Box>

      <Flex
        flexDir="column"
        w="full"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading as="h3" size="lg" color={titleColor} my="5">
          {title}
        </Heading>
        <Text color={textColor}>{body}</Text>
      </Flex>
    </VStack>
  )
}
