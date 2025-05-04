import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    const blogs = import.meta.glob("/app/assets/blog/**/*.mdx");

    const blogPaths = Object.keys(blogs).map((path) => {
      const slug = path.split("/").pop()?.replace(".mdx", "");
      return `/blog/${slug}`;
    });

    return ["/", ...blogPaths];
  },
} satisfies Config;
