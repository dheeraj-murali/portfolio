import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { v4 as uuid } from "uuid"
import { Card } from "../../components"
import { ServiceProps } from "../../types"

export const Service = (props: ServiceProps) => {
  const { items, title } = props

  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativePath: { regex: "/(services)/" }
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
    <Box id="services" w="full" px={{ base: "5", lg: "10", xl: "16" }} py="32">
      <Heading as="h2" fontWeight="regular" size="md">
        {title}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} my="10">
        {items.map(item => (
          <Card {...item} edges={images.allFile.edges} key={uuid()} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
