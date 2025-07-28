import startCase from "lodash.startcase";
import { Link, useParams } from "react-router";
import type { Route } from "./+types/blog";

import { Article } from "~/components/article/article";
import { getPostBySlug } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

export function meta({ params }: Route.MetaArgs) {
  const { slug } = params;

  if (!slug) return [{ title: "Dheeraj Murali | Blog" }];

  return [{ title: `Dheeraj Murali | ${startCase(slug)}` }];
}

const Blog = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post?.component)
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center border-dashed rounded-lg border-4 text-muted-foreground text-3xl">
        <span>Unable to load post</span>{" "}
        <Link className={buttonVariants({ variant: "link" })} to="/">
          Navigate home
        </Link>
      </div>
    );

  return <Article>{post?.component()}</Article>;
};

export default Blog;
