import startCase from "lodash.startcase";
import { useParams } from "react-router";
import type { Route } from "./+types/home";

import { Article } from "~/components/article/article";
import { getPostBySlug } from "~/lib/utils";

export function meta({ params }: Route.MetaArgs) {
  const { slug } = params;

  return [
    { title: `Dheeraj Murali | ${startCase(slug)}` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Blog = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug!);

  if (!post?.component) return null;

  return <Article>{post?.component()}</Article>;
};

export default Blog;
