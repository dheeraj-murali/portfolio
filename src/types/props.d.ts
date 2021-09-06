interface LayoutProps {
  children: React.ReactNode;
}

interface NavItemProps extends NavLink {}

interface LinkProps {
  to: string;
  asButton?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  label: string;
}

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  autoComplete?: "on" | "off";
  required?: boolean;
  disabled?: boolean;
  spellCheck?: boolean;
  legend?: string;
}

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
  label: string;
  transparent?: boolean;
}

interface TechStackProps {
  react?: boolean;
  tailwind?: boolean;
  typescript?: boolean;
  next?: boolean;
  gatsby?: boolean;
  aws?: boolean;
  netlify?: boolean;
  bootstrap?: boolean;
  graphql?: boolean;
}

interface PortfolioCardProps {
  title: sting;
  body: sting;
  image: sting;
  link: sting;
  tech: sting[];
}

interface StaticBlogProps {
  posts: BlogPostPreview[];
}

interface BlogProps {
  posts: BlogPostPreview[];
}

interface ArticleItemProps {
  permalink: string;
  title: string;
  excerpt: string;
  createdAt: string;
}
