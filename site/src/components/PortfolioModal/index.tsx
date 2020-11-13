import {
  Box,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"
import Img from "gatsby-image"
import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

export const PortfolioModal = (props: PortfolioModalProps) => {
  const { body, title, fluid, link, isOpen, onOpen, onClose } = props

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              rounded="sm"
              overflow="hidden"
              objectFit="cover"
              onClick={onOpen}
            >
              <Img
                fluid={fluid}
                alt="Profile image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Text py="5">{body}</Text>
          </ModalBody>

          <ModalFooter>
            <Link href={link} isExternal mx="5" _hover={{ color: "blue.500" }}>
              <Button colorScheme="blue" rightIcon={<FaExternalLinkAlt />}>
                Visit website
              </Button>
            </Link>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
