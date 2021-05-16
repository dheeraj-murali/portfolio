import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ReviewCardProps } from "../../types"
import { getSrc } from "../../utils"

export const ReviewCard = (props: ReviewCardProps) => {
  const { message, name, picture, role } = props

  const bg = useColorModeValue("white", "gray.800")
  const color = useColorModeValue("black", "white")

  const image = useStaticQuery(graphql`{
  allFile(
    filter: {extension: {regex: "/(jpg)/"}, relativePath: {regex: "/(clients)/"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(quality: 80, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`)

  return (
    <Box position="relative" minW="xs" maxW="sm" overflow="hidden" mx="5">
      <Flex
        mt="10"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="full"
        p="5"
        bg={bg}
        shadow="lg"
        color={color}
      >
        <Avatar
          position="absolute"
          top="0"
          border="3px solid white"
          shadow="lg"
          name={name}
          size="2xl"
          src={getSrc(image.allFile.edges, picture)}
        />

        <Box mt="20">
          <Heading as="h2" fontSize="lg" textAlign="center">
            {name}
          </Heading>
          <Text pb="3" textAlign="center" fontSize="sm">
            {role}
          </Text>

          <Text p="3" textAlign="center" fontSize="sm" fontWeight="light">
            {message}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
