import { Box, Divider, Heading, HStack, Spacer, Text } from "@chakra-ui/layout"
import { Button, Container } from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import * as React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Layout } from "../../containers"
import { SEO } from "../../containers/SEO"
import data from "../../content/data.json"
import { truncate } from "lodash"

const { seo } = data

export default function blogPostTemplate({ data, location }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        {...seo}
        keywords={post.frontmatter.title}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Container
        as="article"
        p="5"
        maxW="4xl"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Box w="full" my="10">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<FaArrowLeft />}
            as={Link}
            to="/"
            rel="home"
          >
            Home
          </Button>
        </Box>

        <Box as="header" p="5" my="5">
          <Heading fontSize={["5xl", "7xl"]}>{post.frontmatter.title}</Heading>
          <Text fontSize="lg">{post.frontmatter.date}</Text>
        </Box>

        <Box
          className="mdx-prose"
          as="section"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <Box w="full" my="10">
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<FaArrowLeft />}
            as={Link}
            to="/"
            rel="home"
          >
            Home
          </Button>
        </Box>
      </Container>

      <Divider w="full" />

      <HStack as="nav" p="5">
        {previous && (
          <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<FaArrowLeft />}
            as={Link}
            to={previous.fields.slug}
            rel="next"
          >
            {truncate(previous.frontmatter.title, { length: 25 })}
          </Button>
        )}

        <Spacer />

        {next && (
          <Button
            variant="link"
            colorScheme="blue"
            rightIcon={<FaArrowRight />}
            as={Link}
            to={next.fields.slug}
            rel="next"
          >
            {truncate(next.frontmatter.title, { length: 25 })}
          </Button>
        )}
      </HStack>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
