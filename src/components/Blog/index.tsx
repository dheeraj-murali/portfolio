import { ArticleItem } from "components/Blog/ArticleItem";

export function Blog(props: BlogProps) {
  const { posts } = props;

  return (
    <section id="blog" className="section section-dark">
      <h2>{`Read about some things I'm interested in`}</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <ArticleItem
            key={post.slug}
            permalink={post.permalink}
            title={post.title}
            excerpt={post.excerpt}
            createdAt={post.createdAt}
          />
        ))}
      </article>
    </section>
  );
}
