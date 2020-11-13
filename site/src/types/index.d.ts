interface SEOProps {
  title: string
  description: string
  image: string
  siteUrl: string
  twitterUsername: string
}

interface Nav {
  title: string
  link: string
}

interface Social {
  service: "GitHub" | "LinkedIn" | "Twitter"
  link: string
}

interface HeaderProps {
  nav: Nav[]
  social: Social[]
}

interface NavProps {
  nav: Nav[]
}

interface SocialProps {
  social: Social[]
}
