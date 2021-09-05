import { About } from "components/About";
import { Blog } from "components/Blog";
import { Layout } from "components/common/Layout";
import { Contact } from "components/Contact";
import { Hero } from "components/Hero";
import { Portfolio } from "components/Portfolio";
import type { NextPage } from "next";
import Head from "next/head";
import data from "Data/data.json";
const { seo } = data;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href={seo.image} />
      </Head>
      <Layout>
        <Hero />
        <Blog />
        <Portfolio />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
