import data from "~/data/data.json";
import { getIcons } from "~/lib/icons";
import { cn } from "~/utils/style";

const social = data.social;

type SocialProps = {
  className?: string;
};

export function Social({ className }: SocialProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {social.map((item) => (
        <a
          key={item.service}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-amber-500"
        >
          {getIcons(item.service)}
        </a>
      ))}
    </div>
  );
}
