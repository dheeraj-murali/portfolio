import { AwsIcon } from "./icons/Aws";
import { CssIcon } from "./icons/Css";
import { GraphqlIcon } from "./icons/Graphql";
import { JavascriptIcon } from "./icons/JavaScript";
import { NetlifyIcon } from "./icons/Netlify";
import { NextjsIcon } from "./icons/Nextjs";
import { ReactIcon } from "./icons/React";
import { ReactQueryIcon } from "./icons/ReactQuery";
import { ReactRouterIcon } from "./icons/Reactrouter";
import { ShadcnIcon } from "./icons/Shadcn";
import { TailwindIcon } from "./icons/Tailwind";
import { TypescriptIcon } from "./icons/Typescript";

export const TechStack = () => {
  return (
    <div className="flex flex-row gap-4 mt-4">
      <JavascriptIcon className="size-4 fill-[#F7DF1E] delay-0 animate-landing transition-transform" />
      <TypescriptIcon className="size-4 fill-[#3178C6] delay-100 animate-landing transition-transform" />
      <CssIcon className="size-4 fill-[#663399] delay-200 animate-landing transition-transform" />
      <TailwindIcon className="size-4 fill-[#06B6D4] delay-300 animate-landing transition-transform" />
      <ReactIcon className="size-4 fill-[#61DAFB] delay-400 animate-landing transition-transform" />
      <ShadcnIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-500 animate-landing transition-transform" />
      <ReactRouterIcon className="size-4 fill-[#CA4245] delay-600 animate-landing transition-transform" />
      <ReactQueryIcon className="size-4 fill-[#FF4154] delay-700 animate-landing transition-transform" />
      <GraphqlIcon className="size-4 fill-[#E10098] delay-800 animate-landing transition-transform" />
      <NextjsIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-900 animate-landing transition-transform" />
      <NetlifyIcon className="size-4 fill-[#00C7B7] delay-1000 animate-landing transition-transform" />
      <AwsIcon className="size-4 fill-[#232F3E] dark:fill-[#ffffff] delay-1100 animate-landing transition-transform" />
    </div>
  );
};
