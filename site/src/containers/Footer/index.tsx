import { Box } from "@chakra-ui/react"
import React from "react"

export const Footer = () => {
  return (
    <Box
      id="footer"
      w="full"
      h="sm"
      bg="blue.500"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="32"
    ></Box>
  )
}
