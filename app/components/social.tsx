import data from "~/data/social.json";
import { cn } from "~/utils/style";
import { GithubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedIn";
import { XIcon } from "./icons/x";
import { BlueSky } from "./icons/bluesky";

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

    case "bluesky":
      return (
        <BlueSky className="size-4 fill-[#0285FF] hover:fill-primary dark:hover:fill-primary" />
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
        >
          {getIcons(item.service)}
        </a>
      ))}
    </div>
  );
}
