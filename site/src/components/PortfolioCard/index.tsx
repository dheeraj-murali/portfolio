import { Box, Button, useDisclosure } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { PortfolioCardProps } from "../../types"
import { getFluid } from "../../utils"
import { PortfolioModal } from "../PortfolioModal"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { image, title, edges } = props

  return (
    <>
      <Box
        as={Button}
        rounded="sm"
        overflow="hidden"
        objectFit="cover"
        _hover={{ boxShadow: "5px 5px 15px #000000" }}
        _focus={{ boxShadow: "5px 5px 15px #000000" }}
        style={{ width: "100%", height: "100%" }}
        onClick={onOpen}
        p="0"
      >
        <Img
          fluid={getFluid(edges, image)}
          alt={`${title} screenshot`}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <PortfolioModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        {...props}
        fluid={getFluid(edges, image)}
      />
    </>
  )
}
