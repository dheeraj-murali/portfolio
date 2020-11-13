import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"
import { Card } from "../../components"

export const Service = (props: ServiceProps) => {
  const { items, title } = props

  return (
    <Box id="service" w="full" py="10" p="5">
      <Heading as="h2">{title}</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my="10">
        {items.map(item => (
          <Card {...item} key={uuid()} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
