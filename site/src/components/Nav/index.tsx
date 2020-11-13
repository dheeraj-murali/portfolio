import { Link, Flex, List, ListItem } from "@chakra-ui/react"
import { v4 as uuid } from "uuid"
import React from "react"

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
