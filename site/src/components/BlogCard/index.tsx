import {
  Box,
  Button,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { sample } from "lodash"
import React from "react"
import { FaLink } from "react-icons/fa"
import { BlogCardProps } from "../../types"

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "teal",
]

export function BlogCard(props: BlogCardProps) {
  const { date, title, tags, description, excerpt, slug } = props

  const cardBgColor = useColorModeValue("white", "gray.800")

  return (
    <Flex
      flexDir="column"
      justify="space-between"
      p="5"
      as="article"
      itemScope
      itemType="http://schema.org/Article"
      boxShadow="lg"
      bg={cardBgColor}
      rounded="lg"
    >
      <Box>
        <Box as="header">
          <Box as="time" dateTime={date}>
            {date}
          </Box>

          <Heading as="h3" size="lg" noOfLines={2}>
            <span itemProp="headline">{title}</span>
          </Heading>

          <Wrap my="3">
            {tags.split(",").map((tag, index) => (
              <WrapItem key={index}>
                <Tag colorScheme={sample(colors)} variant="subtle">
                  {tag.trim()}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box as="section" my="5">
          <Text
            fontSize="sm"
            noOfLines={3}
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
            itemProp="description"
          />
        </Box>
      </Box>
      <Flex flexDirection="row-reverse" mt="5">
        <Button
          as={Link}
          to={slug}
          itemProp="url"
          colorScheme="blue"
          variant="ghost"
          rightIcon={<FaLink />}
        >
          Read post
        </Button>
      </Flex>
    </Flex>
  )
}
