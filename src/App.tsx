import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";

function App() {
  return (
    <main className="container mx-auto my-10 gap-20">
      <Header />
      <Hero />
      <Portfolio />
    </main>
  );
}

export default App;
