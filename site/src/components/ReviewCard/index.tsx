import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ReviewCardProps } from "../../types"

export const ReviewCard = (props: ReviewCardProps) => {
  const { message, name, picture } = props
  return (
    <Box position="relative" minW="xs" maxW="sm" overflow="hidden" mx="5">
      <Flex
        mt="10"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="full"
        p="5"
        bg="white"
        shadow="lg"
        color="black"
      >
        <Avatar
          position="absolute"
          top="0"
          border="3px solid white"
          shadow="lg"
          name={name}
          size="2xl"
          src={picture}
        />

        <Box mt="20">
          <Heading as="h2" fontSize="lg" textAlign="center">
            {name}
          </Heading>

          <Text p="3" textAlign="center" fontSize="sm" fontWeight="light">
            {message}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
