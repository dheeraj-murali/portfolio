import { Flex, Icon, List, ListItem, useColorMode } from "@chakra-ui/core"
import React from "react"

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeIcon = { light: "moon", dark: "sun" }

  return (
    <Flex>
      <List display="inline-flex">
        <ListItem p="2">
          <Icon
            name={themeIcon[colorMode]}
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
