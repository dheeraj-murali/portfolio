import {
  Box,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeIcon = { light: <FaMoon />, dark: <FaSun /> }
  const label = useColorModeValue("toggle dark mode", "toggle light mode")

  return (
    <Box>
      <Tooltip label={label} fontSize="md" hasArrow>
        <IconButton
          aria-label={label}
          icon={themeIcon[colorMode]}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="blue"
        />
      </Tooltip>
    </Box>
  )
}
