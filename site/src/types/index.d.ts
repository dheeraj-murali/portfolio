import { FluidObject } from "gatsby-image"

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
  service: string
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

interface PortfolioItem {
  title: string
  body: string
  image: string
  link: string
}

interface PortfolioProps {
  title: string
  items: PortfolioItem[]
}

interface PortfolioCardProps extends PortfolioItem {}

interface PortfolioModalProps {
  title: string
  body: string
  fluid: FluidObject | FluidObject[]
  link: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
