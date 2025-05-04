import { MDXProvider } from "@mdx-js/react";

import { cn } from "~/lib/utils";

type ArticleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Article = ({ children, className }: ArticleProps) => {
  return (
    <article
      className={cn(
        "mx-auto prose-lg prose-img:rounded prose-pre:bg-accent prose-pre:text-accent-foreground prose-a:text-primary dark:prose-invert dark:prose-pre:bg-accent",
        className
      )}
    >
      <MDXProvider>{children}</MDXProvider>
    </article>
  );
};
