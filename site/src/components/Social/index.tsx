import { Flex, Link, List, ListItem, IconButton } from "@chakra-ui/react"
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
              <Link href={item.link} isExternal>
                <IconButton
                  aria-label={item.service}
                  icon={getService(item.service)}
                  variant="ghost"
                  colorScheme="blue"
                />
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Flex>
  )
}
