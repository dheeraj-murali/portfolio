import { About } from "components/About";
import { Blog } from "components/Blog";
import { Layout } from "components/common/Layout";
import { Contact } from "components/Contact";
import { Hero } from "components/Hero";
import { Portfolio } from "components/Portfolio";
import data from "data/data.json";
import { getAllPosts } from "lib/getPosts";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
const { seo } = data;

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href={seo.image} />
      </Head>
      <Layout>
        <Hero />
        <Blog posts={posts} />
        <Portfolio />
        <About />
        <Contact />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<StaticBlogProps> = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
