import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";
import { Hero } from "~/components/sections/hero/hero";
import { Portfolio } from "~/components/sections/portfolio/portfolio";
import type { Route } from "./+types/home";
import { Blog } from "~/components/sections/blog/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dheeraj Murali" },
    { name: "description", content: "Web designer and front-end developer" },
    {
      name: "keywords",
      content: "Dheeraj Murali, web designer, front-end developer",
    },
    { name: "author", content: "Dheeraj Murali" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#94265d" },
    { name: "og:title", content: "Dheeraj Murali" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://dheerajmurali.com" },
    { name: "og:image", content: "/icon.png" },
    { name: "og:description", content: "Web designer and front-end developer" },
    { name: "og:site_name", content: "Dheeraj Murali" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Dheeraj Murali" },
    {
      name: "twitter:description",
      content: "Web designer and front-end developer",
    },
    { name: "twitter:image", content: "/icon.png" },
    { name: "twitter:site", content: "@_mdrj" },
    { name: "twitter:creator", content: "@_mdrj" },
    { name: "twitter:image:alt", content: "Dheeraj Murali" },
    { name: "twitter:label1", content: "Written by" },
    { name: "twitter:data1", content: "Dheeraj Murali" },
  ];
}

const Home = () => {
  return (
    <>
      <Hero />
      <Blog />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default Home;
