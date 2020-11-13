import { Flex, Link, List, ListItem } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"
import { NavProps } from "../../types"

export const Nav = (props: NavProps) => {
  const { nav } = props

  return (
    <Flex>
      <List display="inline-flex">
        {nav.map(item => (
          <ListItem p="2" key={uuid()}>
            <Link href={item.link} _hover={{ color: "blue.500" }}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}
