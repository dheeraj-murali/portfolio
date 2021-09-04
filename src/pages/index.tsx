import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>@_mdrj</title>
        <meta name="description" content="@_mdrj portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>@_mdrj</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div>
          <a
            target="_blank"
            href="https://github.com/dheeraj-murali"
            rel="noreferrer"
          >
            github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dheeraj-murali/"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a target="_blank" href="https://twitter.com/_mdrj" rel="noreferrer">
            twitter
          </a>
        </div>
        <div>
          <button>Dark Mode / Light Mode</button>
        </div>
      </header>
      <main>
        <section id="main">
          <h2>{`Hey, I'm a digital product developer.`}</h2>
          <p>
            {`I’m Dheeraj a Web designer and Front-end developer, who loves
            crafting fast and easy to use web applications.`}
          </p>
          <div>
            <Image
              src="/hero/heroBg.png"
              alt="A glass window background through outside world is visible"
              layout="fill"
            />
            <Image
              src="/hero/heroChair.png"
              alt="A rolling office chair"
              layout="fill"
            />
            <Image
              src="/hero/heroMe.png"
              alt="A modern office table on which the protagonist is casually sitting and looking at a mobile phone"
              layout="fill"
            />
          </div>
        </section>
        <section id="blog">
          <h2>{`Here are some things I'm interested in`}</h2>
          <article>
            <article>
              <time dateTime="">Date</time>
              <h3>Title</h3>
              <p>Description</p>
            </article>
          </article>
        </section>
        <section>
          <h2>These are some of my work</h2>
          <article>
            <article>
              <Image src="/icon.png" alt="" width="100" height="100" />
              <h3>Product title</h3>
              <p>Product description...</p>
              <ul>
                <li>tool</li>
                <li>tool</li>
                <li>tool</li>
                <li>tool</li>
              </ul>
              <a href="#">External Link</a>
            </article>
          </article>
        </section>
        <section id="about">
          <h2>
            {`Hi there, I'm a Web designer and Front-end developer who loves
            crafting fast and easy to use web applications.`}
          </h2>
          <p>
            {`I love design, web development and passionate about open source. A
            big believer in minimalism and elegant design, and doing more by
            doing less. I've worked as a Front end developer for 4+ years,
            designing and developing customizable data driven user interfaces
            for Healthcare, eCommerce, Product Quality analytics domain and
            more...`}
          </p>
          <aside>
            <Image
              src="/me.jpeg"
              alt="my profile image"
              width="200"
              height="200"
            />
            <h3>Dheeraj Murali</h3>
            <h4>Senior software engineer</h4>
          </aside>
        </section>
        <section id="contact">
          <form>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input
                autoComplete="on"
                required
                id="name"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                autoComplete="on"
                required
                id="email"
                placeholder="Your Email"
              />
              <legend>{`I'll never share your email with anyone.`}</legend>
            </fieldset>
            <fieldset>
              <label htmlFor="phone">Phone Number</label>
              <input
                autoComplete="on"
                id="phone"
                placeholder="Your Phone Number"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea
                required
                spellCheck
                id="message"
                placeholder="Share you thoughts"
                rows={5}
                cols={40}
              />
            </fieldset>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>Designed and developed by @_mdrj.</p>
        <p>© {format(new Date(), "yyyy")} @_mdrj. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
