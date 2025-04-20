import { About } from "@/components/sections/about";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";

function App() {
  return (
    <main className="container mx-auto my-20 flex flex-col gap-40">
      <Header />
      <Hero />
      <Portfolio />
      <About />
    </main>
  );
}

export default App;
