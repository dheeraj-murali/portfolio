import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { CardProps } from "../../types"
import { getFluid } from "../../utils"

export const Card = (props: CardProps) => {
  const { title, body, color, image, edges } = props

  const bg = useColorModeValue(`${color}.200`, `${color}.800`)
  const titleColor = useColorModeValue(`${color}.800`, `${color}.200`)

  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      _hover={{ boxShadow: "outline" }}
      w="full"
      minH="2xs"
      rounded="sm"
      shadow="lg"
      bg={bg}
      p="5"
    >
      <Flex w={{ base: "full", md: "50%" }} flexDir="column">
        <Heading as="h3" size="lg" color={titleColor} fontWeight="regular">
          {title}
        </Heading>

        <Text py="5">{body}</Text>
      </Flex>

      <Box
        overflow="hidden"
        objectFit="cover"
        w={{ base: "full", lg: "250px" }}
        my={{ base: "5", md: "0" }}
        p="0"
      >
        <Img
          fluid={getFluid(edges, image)}
          alt={`${title}`}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  )
}
