import { PseudoBox } from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { fluid } = props

  return (
    <PseudoBox
      size="full"
      rounded="lg"
      overflow="hidden"
      objectFit="cover"
      my={{ base: "16", md: "3" }}
      _hover={{ boxShadow: "5px 5px 15px #000000" }}
    >
      <Img
        fluid={fluid}
        alt="Profile image"
        style={{ width: "100%", height: "100%" }}
      />
    </PseudoBox>
  )
}

interface PortfolioCardProps {
  fluid: any
}
