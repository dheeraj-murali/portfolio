import { Box, Divider, Flex, Link, Spacer, Text } from "@chakra-ui/react"
import React from "react"

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Box id="footer" w="full" px={{ base: "5", lg: "10", xl: "16" }} py="5">
      <Divider border="1px" />
      <Flex m="5">
        <Text>
          Designed and developed by{" "}
          <Link href="https://twitter.com/_mdrj" isExternal>
            @_mdrj.
          </Link>
        </Text>
        <Spacer />
        <Text> © {year} @_mdrj. All rights reserved.</Text>
      </Flex>
    </Box>
  )
}
