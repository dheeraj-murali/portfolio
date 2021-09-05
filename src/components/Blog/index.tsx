import { ArticleItem } from "components/Blog/ArticleItem";

export function Blog() {
  return (
    <section id="blog" className="section section-dark">
      <h2>{`Read about some things I'm interested in`}</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </article>
    </section>
  );
}
