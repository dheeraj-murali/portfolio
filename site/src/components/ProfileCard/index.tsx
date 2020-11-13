import { Avatar, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ProfileCardProps } from "../../types"

export const ProfileCard = (props: ProfileCardProps) => {
  const { image, name, role } = props

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      my="10"
      p="5"
      bg="white"
      rounded="lg"
      color="black"
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
