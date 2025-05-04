import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Post = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  image?: string;
};

export const getAllPosts = (): Post[] => [];
