import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { FaBars } from "react-icons/fa"
import { Logo, Nav, Social, ThemeToggle } from "../../components"
import { HeaderProps } from "../../types"

export const Header = (props: HeaderProps) => {
  const { nav, social, fromBlog } = props

  return (
    <Box id="header" w="full">
      <Box
        justifyContent="space-between"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
        px={{ base: "5", lg: "10", xl: "16" }}
        py="5"
        w="full"
      >
        <Logo />
        {!fromBlog && (
          <>
            <Nav nav={nav} />
            <Social social={social} />
          </>
        )}
        <ThemeToggle />
      </Box>
      <Accordion allowToggle>
        <AccordionItem display={{ base: "block", md: "none" }} w="full">
          <AccordionButton display="flex" justifyContent="space-between">
            <Logo />
            <Icon as={FaBars} w="6" h="6" />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexDir="column">
              {!fromBlog && (
                <>
                  <Nav nav={nav} />
                  <Social social={social} />
                </>
              )}
              <ThemeToggle />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
