import { CgBolt } from "react-icons/cg";
import { FcAreaChart } from "react-icons/fc";
import {
  SiAmazonaws,
  SiBootstrap,
  SiCss3,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiNetlify,
  SiNextDotJs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function TechStack(props: TechStackProps) {
  const {
    aws,
    bootstrap,
    gatsby,
    netlify,
    next,
    react,
    tailwind,
    typescript,
    graphql,
    javaScript,
    css,
    chakra,
    vis,
  } = props;

  return (
    <ul className="inline-flex items-center space-x-2 my-5">
      {javaScript && (
        <li>
          <SiJavascript className="fill-current text-yellow-500" />
        </li>
      )}
      {css && (
        <li>
          <SiCss3 className="fill-current text-blue-600" />
        </li>
      )}
      {react && (
        <li>
          <SiReact className="fill-current text-blue-500" />
        </li>
      )}
      {tailwind && (
        <li>
          <SiTailwindcss className="fill-current text-green-600" />
        </li>
      )}
      {chakra && (
        <li>
          <CgBolt className="bg-green-400 p-0.5 text-white rounded-full" />
        </li>
      )}
      {bootstrap && (
        <li>
          <SiBootstrap className="fill-current text-purple-700" />
        </li>
      )}
      {typescript && (
        <li>
          <SiTypescript className="fill-current text-blue-800" />
        </li>
      )}
      {graphql && (
        <li>
          <SiGraphql className="fill-current text-pink-800" />
        </li>
      )}
      {vis && (
        <li>
          <FcAreaChart />
        </li>
      )}
      {next && (
        <li>
          <SiNextDotJs />
        </li>
      )}
      {gatsby && (
        <li>
          <SiGatsby className="fill-current text-pink-800" />
        </li>
      )}
      {aws && (
        <li>
          <SiAmazonaws className="fill-current text-yellow-600" />
        </li>
      )}
      {netlify && (
        <li>
          <SiNetlify className="fill-current text-green-600" />
        </li>
      )}
    </ul>
  );
}
