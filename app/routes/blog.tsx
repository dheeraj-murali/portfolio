import { AppLayout } from "~/components/layouts/app-layout";
import type { Route } from "./+types/home";
import { Hero } from "~/components/sections/hero";
import { Blog } from "~/components/sections/blog";
import { Portfolio } from "~/components/sections/portfolio";
import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";
import { BlogLayout } from "~/components/layouts/blog-layout";
import { useParams } from "react-router";
import { getPostBySlug } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { slug } = useParams();
  const post = getPostBySlug(slug!);

  if (!post?.component) return null;

  return <BlogLayout>{post?.component()}</BlogLayout>;
}
