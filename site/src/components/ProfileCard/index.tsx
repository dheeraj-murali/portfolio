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

  const titleColor = useColorModeValue("gray.600", "gray.400")
  const bgColor = useColorModeValue("white", "gray.900")
  const textColor = useColorModeValue("gray.500", "gray.500")

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      mt="10"
      p="5"
      bg={bgColor}
      rounded="lg"
      color={textColor}
      maxW="xs"
      shadow="lg"
    >
      <Avatar src={image} size="lg" name={name} />

      <Flex flexDir="column" ml="5">
        <Heading fontSize="md" color={titleColor}>
          {name}
        </Heading>

        <Text>{role}</Text>
      </Flex>
    </Flex>
  )
}
