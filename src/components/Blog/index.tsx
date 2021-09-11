import { ArticleItem } from "components/Blog/ArticleItem";
import { compareDesc } from "date-fns";

export function Blog(props: BlogProps) {
  const { posts } = props;

  return (
    <section id="blog" className="section ">
      <h2>{`Read about some things I'm interested in`}</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts
          .sort((firstEl, secondEl) =>
            compareDesc(
              new Date(firstEl.createdAt),
              new Date(secondEl.createdAt)
            )
          )
          .map((post) => (
            <ArticleItem
              key={post.slug}
              permalink={post.permalink}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              tags={post.tags}
            />
          ))}
      </article>
    </section>
  );
}
