import { MDXProvider } from "@mdx-js/react";

import { cn } from "~/lib/utils";
import { Navigation } from "./navigation";

type ArticleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Article = ({ children, className }: ArticleProps) => {
  return (
    <div>
      <Navigation />
      <article
        className={cn(
          "mx-auto grid gap-2",
          "prose md:prose-lg",
          "prose-img:rounded-md prose-img:shadow-md prose-img:aspect-3/2 prose-img:object-cover",
          "prose-a:text-primary",
          "prose-pre:bg-pre prose-pre:text-pre-foreground",
          "prose-code:rounded-md prose-code:bg-pre  prose-code:text-pre-foreground prose-code:px-4 prose-code:py-1 prose-code:text-sm",
          "text-foreground prose-strong:text-foreground prose-headings:text-foreground",
          className
        )}
      >
        <MDXProvider>{children}</MDXProvider>
      </article>
      <Navigation />
    </div>
  );
};
