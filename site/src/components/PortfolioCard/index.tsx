import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { PortfolioCardProps } from "../../types"
import { getFluid } from "../../utils"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { image, title, edges, body, link } = props

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
        <Img
          fluid={getFluid(edges, image)}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%" }}
        />

        <VStack align="flex-start" spacing="5" px="5" py="10">
          <Heading fontSize="2xl" color={titleColor}>
            {title}
          </Heading>
          <Text color={textColor}>{body}</Text>
          <Box display="flex" flexDir="row-reverse" w="full">
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
          </Box>
        </VStack>
      </Box>

      {/* <PortfolioModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        {...props}
        fluid={getFluid(edges, image)}
      /> */}
    </>
  )
}
