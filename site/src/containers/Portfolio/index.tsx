import { Box, Heading, PseudoBox, SimpleGrid } from "@chakra-ui/core"
import bg from "../../assets/images/work.png"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { PortfolioCard } from "../../components/PortfolioCard"

export const Portfolio = () => {
  const images = useStaticQuery(graphql`
    query {
      portfolio: allFile(
        filter: {
          extension: { regex: "/(png)/" }
          name: { regex: "/(portfolio)/" }
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
      id="service"
      w="full"
      py="10"
      bgImg={`url(${images.background.childImageSharp.fluid.src})`}
      backgroundColor="blue.900"
      color="white"
    >
      <Heading as="h2" m={{ base: "2", md: "10", xl: "24" }}>
        Checkout some of my work
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        mx={{ base: "2", md: "10", xl: "24" }}
      >
        {images.portfolio.edges.map((image, key) => (
          <PortfolioCard fluid={image.node.childImageSharp.fluid} key={key} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
