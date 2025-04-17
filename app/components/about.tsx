import { BriefcaseBusinessIcon } from "lucide-react";
import data from "~/data/work.json";
import { cn } from "~/utils/style";
import { buttonVariants } from "./ui/button";

const work = data.work;

export const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">
        Hey, I'm a Front-end developer who loves crafting fast and easy to use
        web applications.
      </h2>

      <p className="text-muted-foreground max-w-xl">
        Passionate about design, web development and open source. A big believer
        in minimalism and elegant design. I've been working as a Front end
        developer for {new Date().getFullYear() - 2016}+ years, designing and
        developing data driven user interfaces for Healthcare, eCommerce,
        Product Quality analytics, FX domains, Asset management and more...
      </p>

      <aside>
        <p className="text-sm mb-2 text-muted-foreground">
          Currently working as,
        </p>
        <div className="flex items-end gap-2">
          <BriefcaseBusinessIcon className="size-4 animate-caret-blink" />
          <span className="text-muted-foreground -mb-1">{work.role}</span>
          <a
            href={work.website}
            target="_blank"
            rel="noreferrer"
            aria-label={work.company}
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 h-fit -mb-0.5"
            )}
          >
            @{work.company}
          </a>
        </div>
      </aside>
    </section>
  );
};
