import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import React from "react"

import { Card } from "../../components"
import { ServiceProps } from "../../types"

export const Service = (props: ServiceProps) => {
  const { items, title } = props

  const titleColor = useColorModeValue("gray.400", "gray.500")

  return (
    <Box id="services" w="full" px={{ base: "5", lg: "10", xl: "16" }} py="32">
      <Heading as="h2" fontWeight="regular" size="md" color={titleColor}>
        {title}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} my="10">
        {items.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
