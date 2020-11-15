import { Flex, IconButton, Link, Wrap, WrapItem } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"
import { SocialProps } from "../../types"
import { getService } from "../../utils/index"

export const Social = (props: SocialProps) => {
  const { social } = props

  return (
    <Flex>
      <Wrap display="inline-flex">
        {social.map(item => {
          return (
            <WrapItem key={uuid()} display="flex">
              <IconButton
                aria-label={item.service}
                icon={getService(item.service)}
                variant="ghost"
                colorScheme="blue"
                as={Link}
                href={item.link}
                isExternal
              />
            </WrapItem>
          )
        })}
      </Wrap>
    </Flex>
  )
}
