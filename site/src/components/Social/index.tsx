import { Box, Flex, Link, List, ListItem } from "@chakra-ui/core"
import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export const Social = () => {
  return (
    <Flex>
      <List display="inline-flex">
        <ListItem p="2">
          <Link
            href="https://chakra-ui.com"
            isExternal
            _hover={{ color: "blue.500" }}
          >
            <Box as={FaGithubSquare} size="6" />
          </Link>
        </ListItem>
        <ListItem p="2">
          <Link
            href="https://www.linkedin.com/in/dheeraj-murali/"
            isExternal
            _hover={{ color: "blue.500" }}
          >
            <Box as={FaLinkedin} size="6" />
          </Link>
        </ListItem>
        <ListItem p="2">
          <Link
            href="https://twitter.com/_mdrj"
            isExternal
            _hover={{ color: "blue.500" }}
          >
            <Box as={FaTwitterSquare} size="6" />
          </Link>
        </ListItem>
      </List>
    </Flex>
  )
}
