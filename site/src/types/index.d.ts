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

interface Title {
  text: string
  highlight: string
}

interface HeroProps {
  title: Title
  body: string
  image: string
}

interface Service {
  title: string
  body: string
  image: string
  color: string
}

interface ServiceProps {
  title: string
  items: Service[]
}

interface CardProps extends Service {}
