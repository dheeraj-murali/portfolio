import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { Portfolio } from "~/components/portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col gap-40 px-4 my-20">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
