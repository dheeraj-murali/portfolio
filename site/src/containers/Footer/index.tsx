import { Box, Divider, Flex, Text, Spacer } from "@chakra-ui/react"
import React from "react"
import { FaHeart } from "react-icons/fa"

export const Footer = () => {
  return (
    <Box id="footer" w="full" px={{ base: "5", lg: "10", xl: "16" }} py="5">
      <Divider border="1px" />
      <Flex m="5">
        <Text>Designed and developed by @_mdrj</Text>
        <Spacer />
        <Text>© 2020 @_mdrj. All rights reserved.</Text>
      </Flex>
    </Box>
  )
}
