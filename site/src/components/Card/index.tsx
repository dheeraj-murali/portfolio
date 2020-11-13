import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

export const Card = (props: CardProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      w="full"
      h="full"
      rounded="sm"
      p="5"
      shadow="lg"
      bg={props.color}
      _hover={{ boxShadow: "outline" }}
      color="black"
    >
      <Flex w="50%" flexDir="column">
        <Heading as="h3" fontSize="xl" fontWeight="bold">
          Branding & logo
        </Heading>

        <Text py="5">
          Lorem oipsum sit amet consectetur adipisicing elit. Esse earum, fugiat
          veritatis vel deserunt ipsam suscipit nesciunt ipsa, atque velit ea
          voluptatem dolores, asperiores eaque. Doloribus vel dolorem labore
          nihil.
        </Text>
      </Flex>

      <Image src="/logo.svg" size="200px" />
    </Box>
  )
}

interface CardProps {
  color: string
}
