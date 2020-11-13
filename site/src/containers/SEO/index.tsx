import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

export const SEO = (props: SEOProps) => {
  const { siteUrl, description, image, title, twitterUsername } = props
  const { pathname } = useLocation()

  return (
    <Helmet title={title} titleTemplate={title}>
      <meta name="description" content={description} />
      <meta name="image" content={`${siteUrl}${image}`} />
      {`${siteUrl}${pathname}` && (
        <meta property="og:url" content={`${siteUrl}${pathname}`} />
      )}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {`${siteUrl}${image}` && (
        <meta property="og:image" content={`${siteUrl}${image}`} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {`${siteUrl}${image}` && (
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
      )}
    </Helmet>
  )
}

interface SEOProps {
  title: string
  description: string
  image: string
  siteUrl: string
  twitterUsername: string
}
