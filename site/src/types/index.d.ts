import { FluidObject } from "gatsby-image"

interface SEOProps {
  title: string
  description: string
  image: string
  siteUrl: string
  twitterUsername: string
  keywords: string
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

declare interface ScrollAssistProps {
  leftClickFn: () => void
  rightClickFn: () => void
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
  color: string
}

interface PortfolioProps {
  title: string
  items: PortfolioItem[]
}

interface PortfolioCardProps extends PortfolioItem {
  edges: any
}

interface PortfolioModalProps {
  title: string
  body: string
  fluid: FluidObject | FluidObject[]
  link: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface Testimonial {
  name: string
  role: string
  message: string
  picture: string
}

interface Profile {
  name: string
  role: string
}

interface AboutProps {
  title: Title
  body: string
  testimonials: Testimonial[]
  profile: Profile
}

interface ProfileCardProps extends Profile {
  image: string
}

interface ReviewCardProps extends Testimonial {}

interface ContactProps {
  title: string
  mail: string
}
