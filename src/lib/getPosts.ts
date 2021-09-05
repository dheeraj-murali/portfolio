import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "src/_blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), "src/_blog", filename),
      "utf8"
    );

    const { data } = matter(file);

    const slug = filename.replace(/\.mdx$/, "");

    return {
      ...data,
      slug,
      permalink: `/blog/${slug}`,
    };
  });
}
