import { Box, Heading, SimpleGrid, useColorMode } from "@chakra-ui/core"
import React from "react"
import { Card } from "../../components"

export const Service = () => {
  const { colorMode } = useColorMode()

  return (
    <Box id="service" w="full" py="10">
      <Heading as="h2" m={{ base: "2", md: "10", xl: "24" }}>
        Reach out to me for
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mx={{ base: "2", md: "10", xl: "24" }}
      >
        {[1, 2, 3, 4].map(item => (
          <Card color="green.200" key={item} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
