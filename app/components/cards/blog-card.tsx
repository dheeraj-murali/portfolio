import { Link2Icon } from "lucide-react";

import type { Post } from "~/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

type BlogCardProps = Post;

export const BlogCard = ({ date, description, slug, title }: BlogCardProps) => {
  return (
    <Card key={slug} className="border-none shadow-none bg-accent">
      <CardHeader>
        <time className="text-xs text-muted-foreground">
          {new Date(date).toDateString()}
        </time>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <a
          href={`blog/${slug}`}
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <Link2Icon className="size-4" />
          <span>View full article</span>
        </a>
      </CardContent>
    </Card>
  );
};
