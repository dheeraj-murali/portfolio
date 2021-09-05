import {
  SiNextDotJs,
  SiGatsby,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAmazonaws,
  SiNetlify,
  SiBootstrap,
} from "react-icons/si";

export function TechStack(props: TechStackProps) {
  const { aws, bootstrap, gatsby, netlify, next, react, tailwind, typescript } =
    props;

  return (
    <ul className="inline-flex items-center space-x-2 my-5">
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
      {next && (
        <li>
          <SiNextDotJs className="fill-current text-primary-500" />
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
