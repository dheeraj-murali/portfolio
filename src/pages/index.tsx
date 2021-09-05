import { About } from "components/About";
import { Blog } from "components/Blog";
import { Layout } from "components/common/Layout";
import { Contact } from "components/Contact";
import { Hero } from "components/Hero";
import { Portfolio } from "components/Portfolio";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>@_mdrj</title>
        <meta name="description" content="@_mdrj portfolio website" />
        <link rel="icon" href="/favicon.ico" />
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
