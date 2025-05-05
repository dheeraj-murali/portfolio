import { Link2Icon } from "lucide-react";

import { cn, type Post } from "~/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { buttonVariants } from "~/components/ui/button";

type BlogCardProps = Post;

export const BlogCard = ({ date, description, slug, title }: BlogCardProps) => {
  return (
    <Card
      key={slug}
      className="border-none shadow-none flex flex-col justify-between"
    >
      <CardHeader>
        <time className="text-xs text-muted-foreground">
          {new Date(date).toDateString()}
        </time>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end">
        <a
          href={`blog/${slug}`}
          className={cn(buttonVariants({ variant: "link" }))}
        >
          <Link2Icon className="size-4" />
          <span>View full article</span>
        </a>
      </CardContent>
    </Card>
  );
};
