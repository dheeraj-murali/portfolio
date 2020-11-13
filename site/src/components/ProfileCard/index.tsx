import { Avatar, Flex, Heading } from "@chakra-ui/core"
import React from "react"

export const ProfileCard = (props: ProfileCardProps) => {
  const { profileImage } = props

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      my="10"
      p="5"
      bg="white"
      rounded="lg"
      color="black"
      w="xs"
    >
      <Avatar src={profileImage} size="lg" name="Dheeraj Murali" />

      <Flex flexDir="column">
        <Heading fontSize="md">Dheeraj Murali</Heading>

        <text>Senior software engineer</text>
      </Flex>
    </Flex>
  )
}

interface ProfileCardProps {
  profileImage: string
}
