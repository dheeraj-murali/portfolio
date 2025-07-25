import data from "~/assets/data.json";
import { DevIcon } from "~/components/icons/dev";
import { GithubIcon } from "~/components/icons/github";
import { LinkedInIcon } from "~/components/icons/linkedIn";
import { XIcon } from "~/components/icons/x";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const social = data.social;

type SocialProps = {
  className?: string;
};

const getIcons = (service: string) => {
  switch (service) {
    case "github":
      return (
        <GithubIcon className="size-4 fill-[#181717] dark:fill-[#ffffff] hover:fill-primary dark:hover:fill-primary" />
      );

    case "linkedIn":
      return (
        <LinkedInIcon className="size-6 fill-[#0077B5] hover:fill-primary dark:hover:fill-primary" />
      );

    case "x":
      return (
        <XIcon className="size-4 fill-[#000000] dark:fill-[#ffffff] hover:fill-primary dark:hover:fill-primary" />
      );

    case "dev":
      return (
        <DevIcon className="size-6 fill-[#0A0A0A] dark:fill-[#ffffff] hover:fill-primary dark:hover:fill-primary" />
      );

    default:
      return null;
  }
};

export function Social({ className }: SocialProps) {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {social.map((item) => (
        <a
          key={item.service}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          aria-label={item.service}
          className={cn(buttonVariants({ variant: "link", size: "icon" }))}
        >
          {getIcons(item.service)}
        </a>
      ))}
    </div>
  );
}
