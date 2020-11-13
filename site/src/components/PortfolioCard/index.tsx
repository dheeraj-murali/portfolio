import { Box, useDisclosure } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { PortfolioCardProps } from "../../types"
import { getFluid } from "../../utils"
import { PortfolioModal } from "../PortfolioModal"

export const PortfolioCard = (props: PortfolioCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { image } = props
  const bg = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativePath: { regex: "/(portfolio)/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 80) {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Box
        rounded="sm"
        overflow="hidden"
        objectFit="cover"
        _hover={{ boxShadow: "5px 5px 15px #000000" }}
        onClick={onOpen}
      >
        <Img
          fluid={getFluid(bg.allFile.edges, image)}
          alt="Profile image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <PortfolioModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        {...props}
        fluid={getFluid(bg.allFile.edges, image)}
      />
    </>
  )
}
