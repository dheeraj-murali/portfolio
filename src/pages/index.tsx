import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>@_mdrj</title>
        <meta name="description" content="@_mdrj portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-black text-9xl">
          Welcome to The new portfolio website
        </h1>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
