import {
  Box,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  const bgColor = useColorModeValue("gray.700", "gray.900")

  return (
    <Box
      id="footer"
      w="full"
      px={{ base: "5", lg: "10", xl: "16" }}
      py="5"
      bg={bgColor}
      color="white"
    >
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
