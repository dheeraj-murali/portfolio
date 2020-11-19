import { Button, DarkMode, Flex, Text, useDisclosure } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { PortfolioCardProps } from "../../types"
import { getFluid } from "../../utils"
import { PortfolioModal } from "../PortfolioModal"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { image, title, color, edges } = props

  return (
    <>
      <DarkMode>
        <Flex
          flexDir="column"
          as={Button}
          overflow="hidden"
          objectFit="cover"
          _hover={{ boxShadow: `0px 0px 20px ${color}` }}
          _focus={{ boxShadow: `5px 5px 15px ${color}` }}
          style={{ width: "100%", height: "100%" }}
          onClick={onOpen}
          color={`${color}.300`}
          borderColor={`${color}.300`}
          variant="solid"
          p="0"
        >
          <Img
            fluid={getFluid(edges, image)}
            alt={`${title} screenshot`}
            style={{ width: "100%", height: "100%" }}
          />

          <Text py="5">{title}</Text>
        </Flex>

        <PortfolioModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          {...props}
          fluid={getFluid(edges, image)}
        />
      </DarkMode>
    </>
  )
}
