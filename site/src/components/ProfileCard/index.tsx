import {
  Avatar,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { ProfileCardProps } from "../../types"

export const ProfileCard = (props: ProfileCardProps) => {
  const { image, name, role } = props

  const bg = useColorModeValue("white", "gray.800")
  const color = useColorModeValue("black", "white")

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      mt="10"
      p="5"
      bg={bg}
      rounded="lg"
      color={color}
      maxW="xs"
    >
      <Avatar src={image} size="lg" name={name} />

      <Flex flexDir="column" ml="5">
        <Heading fontSize="md">{name}</Heading>

        <Text>{role}</Text>
      </Flex>
    </Flex>
  )
}
