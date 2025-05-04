import { getAllPosts } from "@/lib/utils";
import { BlogCard } from "../blog-card";

export const Blog = () => {
  const posts = getAllPosts();

  return (
    <section id="blog" className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">Read about things I'm interested in</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};
