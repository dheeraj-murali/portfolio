import { BriefcaseBusinessIcon } from "lucide-react";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const About = () => {
  return (
    <section className="flex flex-col gap-8">
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
        <div className="w-fit flex items-center gap-2">
          <BriefcaseBusinessIcon className="size-4 animate-caret-blink" />
          <span className="text-muted-foreground">
            Software engineering lead
          </span>
          <a
            href="https://www.ust.com"
            target="_blank"
            rel="noreferrer"
            aria-label="UST"
            className={cn(buttonVariants({ variant: "link" }), "px-2")}
          >
            @UST
          </a>
        </div>
      </aside>
    </section>
  );
};
