export interface SEOProps {
  title: string
  description: string
  image: string
  siteUrl: string
  twitterUsername: string
  keywords: string
}

export interface Nav {
  title: string
  link: string
}

export interface Social {
  service: string
  link: string
}

export interface HeaderProps {
  nav: Nav[]
  social: Social[]
  fromBlog?: boolean
}

export interface NavProps {
  nav: Nav[]
}

export interface ScrollAssistProps {
  leftClickFn: () => void
  rightClickFn: () => void
}

export interface SocialProps {
  social: Social[]
}

export interface Title {
  text: string
  highlight: string
}

export interface HeroProps {
  title: Title
  body: string
  image: string
}

export interface Service {
  title: string
  body: string
  image: string
  color: string
}

export interface ServiceProps {
  title: string
  items: Service[]
}

export interface CardProps extends Service {}

export interface PortfolioItem {
  title: string
  body: string
  image: string
  link: string
  color: string
  tech: string[]
}

export interface PortfolioProps {
  title: string
  items: PortfolioItem[]
}

export interface PortfolioCardProps extends PortfolioItem {
  edges: any
}

export interface Testimonial {
  name: string
  role: string
  message: string
  picture: string
}

export interface Profile {
  name: string
  role: string
}

export interface AboutProps {
  title: Title
  body: string
  testimonials: Testimonial[]
  profile: Profile
}

export interface ProfileCardProps extends Profile {
  image: string
}

export interface ReviewCardProps extends Testimonial {}

export interface ContactProps {
  title: string
  mail: string
}

export interface FormValues {
  name: string
  email: string
  phone: string
  message: string
  bot: string
  "form-name"?: string
  "g-recaptcha-response"?: string
}

export interface NetlifyContactFormProps {
  formName: string
}
