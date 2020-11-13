import { Box, Text, useColorMode } from "@chakra-ui/react"
import React from "react"

export const Logo = () => {
  const { colorMode } = useColorMode()

  const textColor = { light: "blue.500", dark: "blue.300" }

  return (
    <Box display="inline-flex" color={textColor[colorMode]} p="2">
      <Text fontSize="lg" fontWeight="bold">
        @_mdrj
      </Text>
    </Box>
  )
}
