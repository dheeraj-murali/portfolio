import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { Portfolio } from "~/components/portfolio/portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
    </>
  );
}
