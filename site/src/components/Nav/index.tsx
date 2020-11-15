import { Button, Flex, Wrap, WrapItem } from "@chakra-ui/react"
import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"
import { v4 as uuid } from "uuid"
import { NavProps } from "../../types"

export const Nav = (props: NavProps) => {
  const { nav } = props

  return (
    <Flex>
      <Wrap>
        {nav.map(item => (
          <WrapItem key={uuid()}>
            <Button
              onClick={() => scrollTo(item.link)}
              variant="ghost"
              colorScheme="blue"
            >
              {item.title}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}
