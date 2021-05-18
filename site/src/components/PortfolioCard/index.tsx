import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { v4 } from "uuid"
import { PortfolioCardProps } from "../../types"
import { getImage, getTechIcons } from "../../utils"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { image, title, edges, body, link, tech } = props

  const titleColor = useColorModeValue("gray.600", "gray.400")
  const bgColor = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.500", "gray.500")

  return (
    <>
      <Box
        d="inline-block"
        p="0"
        w="full"
        bg={bgColor}
        my="5"
        rounded="lg"
        overflow="hidden"
        shadow="lg"
      >
        <GatsbyImage
          image={getImage(edges, image)}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%" }}
        />

        <VStack align="flex-start" spacing="5" px="5" py="10">
          <Heading fontSize="2xl" color={titleColor}>
            {title}
          </Heading>

          <Text color={textColor}>{body}</Text>

          <Wrap spacing="5" align="center" w="full">
            {tech.map(item => (
              <WrapItem key={v4()}>{getTechIcons(item)}</WrapItem>
            ))}
          </Wrap>

          <Flex align="center" w="full">
            <Spacer />
            <Button
              as={Link}
              href={link}
              isExternal
              colorScheme="blue"
              variant="ghost"
              rightIcon={<FaExternalLinkAlt />}
            >
              Visit website
            </Button>
          </Flex>
        </VStack>
      </Box>
    </>
  )
}
