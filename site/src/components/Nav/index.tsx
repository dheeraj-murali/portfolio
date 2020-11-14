import { Flex, Button, List, ListItem } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"
import { NavProps } from "../../types"
import scrollTo from "gatsby-plugin-smoothscroll"

export const Nav = (props: NavProps) => {
  const { nav } = props

  return (
    <Flex>
      <List display="flex" flexWrap="wrap">
        {nav.map(item => (
          <ListItem p="2" key={uuid()}>
            <Button
              onClick={() => scrollTo(item.link)}
              variant="ghost"
              colorScheme="blue"
            >
              {item.title}
            </Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}
