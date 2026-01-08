import { AwsIcon } from "~/components/icons/aws";
import { BootstrapIcon } from "~/components/icons/bootstrap";
import { CssIcon } from "~/components/icons/css";
import { GatsbyIcon } from "~/components/icons/gatsby";
import { GraphqlIcon } from "~/components/icons/graphql";
import { JavascriptIcon } from "~/components/icons/javascript";
import { NetlifyIcon } from "~/components/icons/netlify";
import { NextjsIcon } from "~/components/icons/nextjs";
import { ReactIcon } from "~/components/icons/react";
import { ReactQueryIcon } from "~/components/icons/reactquery";
import { ReactRouterIcon } from "~/components/icons/reactrouter";
import { ShadcnIcon } from "~/components/icons/shadcn";
import { TailwindIcon } from "~/components/icons/tailwind";
import { TypescriptIcon } from "~/components/icons/typescript";
import { PlotlyIcon } from "./icons/plotly";
import { ElectronIcon } from "./icons/electron";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ChartIcon } from "./icons/chartjs";

type TechStackProps = {
  stack?: string[];
};

const isIncluded = (stack: string[] | undefined, item: string) =>
  stack ? stack.includes(item) : true;

export const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="flex flex-row flex-wrap items-baseline gap-4 mt-4">
      {isIncluded(stack, "js") && (
        <Tooltip>
          <TooltipTrigger>
            <JavascriptIcon className="size-4 fill-[#F7DF1E] delay-0 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>JavaScript</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "ts") && (
        <Tooltip>
          <TooltipTrigger>
            <TypescriptIcon className="size-4 fill-[#3178C6] delay-100 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>TypeScript</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "css") && (
        <Tooltip>
          <TooltipTrigger>
            <CssIcon className="size-4 fill-[#663399] delay-200 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>CSS</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "btsrp") && (
        <Tooltip>
          <TooltipTrigger>
            <BootstrapIcon className="size-4 fill-[#7952B3] delay-300 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Bootstrap</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "tw") && (
        <Tooltip>
          <TooltipTrigger>
            <TailwindIcon className="size-4 fill-[#06B6D4] delay-400 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Tailwind CSS</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "rt") && (
        <Tooltip>
          <TooltipTrigger>
            <ReactIcon className="size-4 fill-[#61DAFB] delay-500 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>React</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "scn") && (
        <Tooltip>
          <TooltipTrigger>
            <ShadcnIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-600 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Shadcn</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "rtr") && (
        <Tooltip>
          <TooltipTrigger>
            <ReactRouterIcon className="size-4 fill-[#CA4245] delay-700 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>React Router</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "rtq") && (
        <Tooltip>
          <TooltipTrigger>
            <ReactQueryIcon className="size-4 fill-[#FF4154] delay-800 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>React Query</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "gql") && (
        <Tooltip>
          <TooltipTrigger>
            <GraphqlIcon className="size-4 fill-[#E10098] delay-900 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>GraphQL</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "njs") && (
        <Tooltip>
          <TooltipTrigger>
            <NextjsIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] delay-1000 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Next.js</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "gtpy") && (
        <Tooltip>
          <TooltipTrigger>
            <GatsbyIcon className="size-4 fill-[#663399] delay-1100 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Gatsby</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "ntfy") && (
        <Tooltip>
          <TooltipTrigger>
            <NetlifyIcon className="size-4 fill-[#00C7B7] delay-1200 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Netlify</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "aws") && (
        <Tooltip>
          <TooltipTrigger>
            <AwsIcon className="size-4 fill-[#232F3E] dark:fill-[#ffffff] delay-1300 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>AWS</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "plt") && (
        <Tooltip>
          <TooltipTrigger>
            <PlotlyIcon className="size-4 fill-[#7A76FF] delay-1400 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Plotly</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "elt") && (
        <Tooltip>
          <TooltipTrigger>
            <ElectronIcon className="size-4 fill-[#47848F] delay-1500 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Electron</TooltipContent>
        </Tooltip>
      )}
      {isIncluded(stack, "chrt") && (
        <Tooltip>
          <TooltipTrigger>
            <ChartIcon className="size-4 fill-[#47848F] delay-1500 animate-landing transition-transform" />
          </TooltipTrigger>
          <TooltipContent>Chart.js</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};
