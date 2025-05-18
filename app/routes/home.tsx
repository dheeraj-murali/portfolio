import { About } from "~/components/sections/about";
import { Blog } from "~/components/sections/blog";
import { Contact } from "~/components/sections/contact";
import { Hero } from "~/components/sections/hero";
import { Portfolio } from "~/components/sections/portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dheeraj Murali" },
    { name: "description", content: "Welcome to React Router!" },
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
