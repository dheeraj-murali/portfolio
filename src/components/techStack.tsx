import { AwsIcon } from "./icons/aws";
import { BootstrapIcon } from "./icons/bootstrap";
import { CssIcon } from "./icons/css";
import { GatsbyIcon } from "./icons/gatsby";
import { GraphqlIcon } from "./icons/graphql";
import { JavascriptIcon } from "./icons/javascript";
import { NetlifyIcon } from "./icons/netlify";
import { NextjsIcon } from "./icons/nextjs";
import { ReactIcon } from "./icons/react";
import { ReactQueryIcon } from "./icons/reactquery";
import { ReactRouterIcon } from "./icons/reactrouter";
import { ShadcnIcon } from "./icons/shadcn";
import { TailwindIcon } from "./icons/tailwind";
import { TypescriptIcon } from "./icons/typescript";

type TechStackProps = {
  stack?: string[];
};

const isIncluded = (stack: string[] | undefined, item: string) =>
  stack ? stack.includes(item) : true;

export const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="flex flex-row items-baseline gap-4 mt-4">
      {isIncluded(stack, "js") && (
        <JavascriptIcon className="size-4 fill-[#F7DF1E] delay-0 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "ts") && (
        <TypescriptIcon className="size-4 fill-[#3178C6] delay-100 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "css") && (
        <CssIcon className="size-4 fill-[#663399] delay-200 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "btsrp") && (
        <BootstrapIcon className="size-4 fill-[#7952B3] delay-300 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "tw") && (
        <TailwindIcon className="size-4 fill-[#06B6D4] delay-400 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "rt") && (
        <ReactIcon className="size-4 fill-[#61DAFB] delay-500 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "scn") && (
        <ShadcnIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-600 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "rtr") && (
        <ReactRouterIcon className="size-4 fill-[#CA4245] delay-700 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "rtq") && (
        <ReactQueryIcon className="size-4 fill-[#FF4154] delay-800 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "gql") && (
        <GraphqlIcon className="size-4 fill-[#E10098] delay-900 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "njs") && (
        <NextjsIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-1000 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "gtpy") && (
        <GatsbyIcon className="size-4 fill-[#663399] delay-1100 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "ntfy") && (
        <NetlifyIcon className="size-4 fill-[#00C7B7] delay-1200 animate-landing transition-transform" />
      )}
      {isIncluded(stack, "aws") && (
        <AwsIcon className="size-4 fill-[#232F3E] dark:fill-[#ffffff] delay-1300 animate-landing transition-transform" />
      )}
    </div>
  );
};
