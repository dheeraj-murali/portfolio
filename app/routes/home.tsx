import { AppLayout } from "~/components/layouts/app-layout";
import type { Route } from "./+types/home";
import { Hero } from "~/components/sections/hero";
import { Blog } from "~/components/sections/blog";
import { Portfolio } from "~/components/sections/portfolio";
import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Blog />
      <Portfolio />
      <About />
      <Contact />
    </AppLayout>
  );
}
