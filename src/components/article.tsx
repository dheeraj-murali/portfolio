import { cn } from "@/lib/utils";
import { MDXProvider } from "@mdx-js/react";

type ArticleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Article = ({ children, className }: ArticleProps) => {
  return (
    <article
      className={cn(
        "prose prose-a:text-primary dark:prose-invert dark:prose-code:bg-accent dark:prose-pre:bg-accent",
        className
      )}
    >
      <MDXProvider components={{}}>{children}</MDXProvider>
    </article>
  );
};
