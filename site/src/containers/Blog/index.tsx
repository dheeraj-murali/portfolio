import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { BlogCard } from "../../components/BlogCard"

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
        {data.blog.posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <BlogCard
              key={index}
              date={post.frontmatter.date}
              title={title}
              tags={post.frontmatter.tags}
              description={post.frontmatter.description}
              excerpt={post.excerpt}
              slug={post.fields.slug}
            />
          )
        })}
      </SimpleGrid>

      <ol style={{ listStyle: `none` }}></ol>
    </Box>
  )
}
