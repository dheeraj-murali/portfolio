import { clsx, type ClassValue } from "clsx";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const postModules = import.meta.glob("../assets/blog/*.mdx", { eager: true });

export type Post = {
  title: string;
  date: string;
  description: string;
  slug: string;
  component: () => JSX.Element;
};

type Mod = {
  slug: string;
  title: string;
  date: string;
  description: string;
  default: () => JSX.Element;
};

export const getAllPosts = (): Post[] =>
  Object.values(postModules as unknown as Mod[]).map((mod) => ({
    slug: mod.slug,
    title: mod.title,
    date: mod.date,
    description: mod.description,
    component: mod.default,
  }));

export const getPostBySlug = (slug: string): Post | undefined =>
  getAllPosts().find((p) => p.slug === slug);
