import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { sample } from "lodash"
import React from "react"
import { FaLink } from "react-icons/fa"
import { v4 } from "uuid"

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

export function Blog() {
  const data = useStaticQuery(graphql`
    {
      blog: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        posts: nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  `)

  const titleColor = useColorModeValue("gray.600", "gray.500")
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const cardBgColor = useColorModeValue("white", "gray.800")

  return (
    <Box
      id="blog"
      w="full"
      px={{ base: "5", lg: "10", xl: "16" }}
      pt="20"
      pb="5"
      bg={bgColor}
    >
      <Heading as="h2" size="lg" color={titleColor}>
        Check out my blog
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} my="10">
        {data.blog.posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Flex
              flexDir="column"
              justify="space-between"
              p="5"
              as="article"
              key={v4()}
              itemScope
              itemType="http://schema.org/Article"
              boxShadow="lg"
              bg={cardBgColor}
              rounded="lg"
            >
              <Box>
                <Box as="header">
                  <Box as="time" dateTime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </Box>

                  <Heading as="h3" size="lg" noOfLines={2}>
                    <span itemProp="headline">{title}</span>
                  </Heading>

                  <Wrap my="3">
                    {post.frontmatter.tags.split(",").map(tag => (
                      <WrapItem key={v4()}>
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
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </Box>
              </Box>
              <Flex flexDirection="row-reverse" mt="5">
                <Button
                  as={Link}
                  to={post.fields.slug}
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
        })}
      </SimpleGrid>

      <ol style={{ listStyle: `none` }}></ol>
    </Box>
  )
}
