import {
  Box,
  Button,
  DarkMode,
  LightMode,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { PortfolioModalProps } from "../../types"

export const PortfolioModal = (props: PortfolioModalProps) => {
  const { body, title, fluid, link, isOpen, onOpen, onClose } = props

  return (
    <DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent color="white">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              rounded="sm"
              overflow="hidden"
              objectFit="cover"
              onClick={onOpen}
            >
              <GatsbyImage
                image={fluid}
                alt="Profile image"
                style={{ width: "100%", height: "100%" }} />
            </Box>
            <Text py="5">{body}</Text>
          </ModalBody>

          <ModalFooter>
            <Wrap>
              <WrapItem>
                <Button
                  as={Link}
                  href={link}
                  isExternal
                  colorScheme="blue"
                  variant="ghost"
                  rightIcon={<FaExternalLinkAlt />}
                >
                  Visit website
                </Button>
              </WrapItem>
              <WrapItem>
                <LightMode>
                  <Button colorScheme="red" onClick={onClose}>
                    Close
                  </Button>
                </LightMode>
              </WrapItem>
            </Wrap>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
}
