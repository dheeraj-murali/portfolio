import { Flex, Link, List, ListItem } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"
import { SocialProps } from "../../types"
import { getService } from "../../utils/index"

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
