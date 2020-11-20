import { Flex, Heading, useColorModeValue } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { animated, useSpring } from "react-spring"
import { CardProps } from "../../types"
import { calcText, getFluid, transText } from "../../utils"

export const Card = (props: CardProps) => {
  const { title, color, image, edges } = props

  const titleColor = useColorModeValue(`${color}.600`, `${color}.200`)

  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 140 },
  }))

  return (
    <Flex
      as={animated.div}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcText(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: spring.xys.interpolate(transText) }}
      flexDir={{ base: "column" }}
      justifyContent="space-between"
      alignItems="center"
      w="full"
      minH="2xs"
      p="5"
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
