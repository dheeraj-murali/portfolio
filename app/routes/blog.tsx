import startCase from "lodash.startcase";
import { useParams } from "react-router";
import type { Route } from "./+types/blog";

import { Article } from "~/components/article/article";
import { getPostBySlug } from "~/lib/utils";

export function meta({ params }: Route.MetaArgs) {
  const { slug } = params;

  if (!slug) return [{ title: "Dheeraj Murali | Blog" }];

  return [{ title: `Dheeraj Murali | ${startCase(slug)}` }];
}

const Blog = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post?.component) return <div>Unable to load post</div>;

  return <Article>{post?.component()}</Article>;
};

export default Blog;
