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
        "mx-auto prose-lg prose-img:rounded prose-pre:bg-pre prose-a:text-primary prose-pre:text-pre-foreground",
        className
      )}
    >
      <MDXProvider>{children}</MDXProvider>
    </article>
  );
};
