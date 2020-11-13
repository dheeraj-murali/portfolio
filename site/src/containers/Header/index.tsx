import { Flex, useColorMode } from "@chakra-ui/react"
import React from "react"
import { Logo, Nav, Social, ThemeToggle } from "../../components"

export const Header = (props: HeaderProps) => {
  const { nav, social } = props
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
      <Nav nav={nav} />
      <Social social={social} />
      <ThemeToggle />
    </Flex>
  )
}
