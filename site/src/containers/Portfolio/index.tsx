import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
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

      screenshots: allFile(
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

  const titleColor = useColorModeValue("gray.600", "gray.500")
  const bgColor = useColorModeValue("gray.50", "gray.900")

  return (
    <Box
      id="portfolio"
      w="full"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="20"
      bg={bgColor}
    >
      <Heading as="h2" size="lg" color={titleColor}>
        {title}
      </Heading>

      <Box sx={{ columnCount: [1, 2, 2], columnGap: "5" }} mt="10">
        {items.map(item => (
          <PortfolioCard
            {...item}
            edges={images.screenshots.edges}
            key={uuid()}
          />
        ))}
      </Box>
    </Box>
  )
}
