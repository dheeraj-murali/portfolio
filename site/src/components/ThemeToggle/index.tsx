import { Flex, Icon, List, ListItem, useColorMode } from "@chakra-ui/react"
import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeIcon = { light: FaMoon, dark: FaSun }

  return (
    <Flex>
      <List display="inline-flex">
        <ListItem p="2">
          <Icon
            as={themeIcon[colorMode]}
            size="6"
            onClick={toggleColorMode}
            cursor="pointer"
            tabIndex={0}
          />
        </ListItem>
      </List>
    </Flex>
  )
}
