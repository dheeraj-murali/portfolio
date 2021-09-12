import { Link } from "components/common/Link";
import { TechStack } from "components/common/TechStack";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export function PortfolioCard(props: PortfolioCardProps) {
  const { body, image, link, tech, title } = props;

  return (
    <article className="card">
      <Image
        src={image}
        alt=""
        width="50"
        height="50"
        layout="fixed"
        className="rounded overflow-hidden"
      />

      <h3>{title}</h3>

      <p className="text-sm line-clamp-3">{body}</p>

      <TechStack
        aws={tech.includes("aws")}
        bootstrap={tech.includes("bootstrap")}
        gatsby={tech.includes("gatsby")}
        graphql={tech.includes("graphql")}
        netlify={tech.includes("netlify")}
        next={tech.includes("next")}
        react={tech.includes("react")}
        tailwind={tech.includes("tailwind")}
        typescript={tech.includes("typescript")}
        javaScript={tech.includes("javaScript")}
        css={tech.includes("css")}
        chakra={tech.includes("chakra")}
      />

      <Link to={link} external className="justify-end" label="visit website">
        <span>Visit Website</span>
        <FaArrowRight />
      </Link>
    </article>
  );
}
