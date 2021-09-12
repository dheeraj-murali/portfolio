import { Transition } from "@headlessui/react";
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
    animate,
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
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[50ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiJavascript className="fill-current text-yellow-500" />
        </Transition>
      )}
      {css && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[100ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiCss3 className="fill-current text-blue-600" />
        </Transition>
      )}
      {react && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[150ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiReact className="fill-current text-blue-500" />
        </Transition>
      )}
      {tailwind && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[200ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiTailwindcss className="fill-current text-green-600" />
        </Transition>
      )}
      {chakra && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[250ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <CgBolt className="bg-green-400 p-0.5 text-white rounded-full" />
        </Transition>
      )}
      {bootstrap && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[300ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiBootstrap className="fill-current text-purple-700" />
        </Transition>
      )}
      {typescript && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[350ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiTypescript className="fill-current text-blue-800" />
        </Transition>
      )}
      {graphql && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[400ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiGraphql className="fill-current text-pink-800" />
        </Transition>
      )}
      {vis && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[450ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <FcAreaChart />
        </Transition>
      )}
      {next && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[500ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiNextDotJs />
        </Transition>
      )}
      {gatsby && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[550ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiGatsby className="fill-current text-pink-800" />
        </Transition>
      )}
      {aws && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[600ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiAmazonaws className="fill-current text-yellow-600" />
        </Transition>
      )}
      {netlify && (
        <Transition
          as="li"
          appear={animate}
          show={true}
          enter="transition-all duration-500 ease-in transform-gpu delay-[650ms]"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          <SiNetlify className="fill-current text-green-600" />
        </Transition>
      )}
    </ul>
  );
}
