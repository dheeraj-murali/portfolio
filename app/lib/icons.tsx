import {
  RiBlueskyFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";

export const getIcons = (icon: string) => {
  switch (icon) {
    case "github":
      return <RiGithubFill className="size-6" />;

    case "linkedIn":
      return <RiLinkedinFill className="size-6" />;

    case "x":
      return <RiTwitterXFill className="size-6" />;

    case "bluesky":
      return <RiBlueskyFill className="size-6" />;

    default:
      return null;
  }
};
