import { Box, IconButton, useColorMode } from "@chakra-ui/react"
import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeIcon = { light: <FaMoon />, dark: <FaSun /> }

  return (
    <Box p="2">
      <IconButton
        aria-label="toggle dark/light mode"
        icon={themeIcon[colorMode]}
        onClick={toggleColorMode}
        variant="ghost"
        colorScheme="blue"
      />
    </Box>
  )
}
