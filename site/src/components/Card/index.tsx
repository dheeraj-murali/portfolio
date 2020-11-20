import { Flex, Heading, useColorModeValue } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { CardProps } from "../../types"
import { getFluid } from "../../utils"

export const Card = (props: CardProps) => {
  const { title, color, image, edges } = props

  const bg = useColorModeValue(`${color}.50`, `${color}.800`)
  const titleColor = useColorModeValue(`${color}.800`, `${color}.200`)

  return (
    <Flex
      flexDir={{ base: "column" }}
      justifyContent="space-between"
      alignItems="center"
      // _hover={{
      //   boxShadow: `0px 0px 15px ${color}`,
      // }}
      w="full"
      minH="2xs"
      rounded="lg"
      // shadow="lg"
      p="5"
      // bg={bg}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        w="xs"
        p="0"
        my="3"
      >
        <Img
          fluid={getFluid(edges, image)}
          alt={`${title}`}
          style={{ width: "100%", height: "100%" }}
        />
      </Flex>

      <Flex w="full" justifyContent="center" alignItems="center">
        <Heading as="h3" size="lg" color={titleColor} fontWeight="regular">
          {title}
        </Heading>
      </Flex>
    </Flex>
  )
}
