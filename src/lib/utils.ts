import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function getAllPosts(): Post[] {
  return [];
}
