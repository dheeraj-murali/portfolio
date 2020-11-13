import { Flex, useColorMode } from "@chakra-ui/core"
import React from "react"
import { Logo, Nav, Social, ThemeToggle } from "../../components"

export const Header = () => {
  const { colorMode } = useColorMode()

  const textColor = { light: "black", dark: "white" }

  return (
    <Flex
      w="full"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="space-around"
      p="5"
      color={textColor[colorMode]}
      zIndex={3}
      shadow="sm"
    >
      <Logo />
      <Nav />
      <Social />
      <ThemeToggle />
    </Flex>
  )
}

interface HeaderProps {}
