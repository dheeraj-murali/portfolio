import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { PortfolioCard } from "../../components/PortfolioCard"
import { PortfolioProps } from "../../types"

export const Portfolio = (props: PortfolioProps) => {
  const { items, title } = props
  const images = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/work.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            srcSet
            sizes
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <Box
      id="portfolio"
      w="full"
      p={{ base: "5", lg: "10", xl: "16" }}
      bgImg={`url(${images.background.childImageSharp.fluid.src})`}
      backgroundColor="blue.900"
      color="white"
    >
      <Heading as="h2">{title}</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt="10">
        {items.map(item => (
          <PortfolioCard {...item} key={uuid()} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
