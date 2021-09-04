import { ArticleItem } from "components/Blog/ArticleItem";

export function Blog() {
  return (
    <section id="blog" className="section section-dark">
      <h2>{`Here are some things I'm interested in`}</h2>
      <article className="flex flex-wrap justify-start items-center">
        <ArticleItem />
      </article>
    </section>
  );
}
