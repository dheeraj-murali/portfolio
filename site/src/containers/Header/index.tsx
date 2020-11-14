import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react"
import React from "react"
import { FaBars } from "react-icons/fa"
import { Logo, Nav, Social, ThemeToggle } from "../../components"
import { HeaderProps } from "../../types"

export const Header = (props: HeaderProps) => {
  const { nav, social } = props

  return (
    <Box id="header" shadow="sm" w="full">
      <Box
        justifyContent="space-between"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
        px={{ base: "3", lg: "10" }}
        py="3"
        w="full"
      >
        <Logo />
        <Nav nav={nav} />
        <Social social={social} />
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
              <Nav nav={nav} />
              <Social social={social} />
              <ThemeToggle />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
