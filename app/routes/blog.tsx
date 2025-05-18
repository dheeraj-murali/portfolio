import { useParams } from "react-router";
import { Article } from "~/components/article";
import { getPostBySlug } from "~/lib/utils";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Blog() {
  const { slug } = useParams();
  const post = getPostBySlug(slug!);

  if (!post?.component) return null;

  return <Article>{post?.component()}</Article>;
}
