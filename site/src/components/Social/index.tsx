import { Flex, Icon, Link, List, ListItem } from "@chakra-ui/react"
import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { v4 as uuid } from "uuid"

const getService = (service: "GitHub" | "LinkedIn" | "Twitter") => {
  switch (service) {
    case "GitHub":
      return <Icon as={FaGithubSquare} w="6" h="6" />
    case "LinkedIn":
      return <Icon as={FaLinkedin} w="6" h="6" />
    case "Twitter":
      return <Icon as={FaTwitterSquare} w="6" h="6" />
    default:
      return null
  }
}

export const Social = (props: SocialProps) => {
  const { social } = props

  return (
    <Flex>
      <List display="inline-flex">
        {social.map(item => {
          return (
            <ListItem m="2" key={uuid()} display="flex">
              <Link href={item.link} isExternal _hover={{ color: "blue.500" }}>
                {getService(item.service)}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Flex>
  )
}
