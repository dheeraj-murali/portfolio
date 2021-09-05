import { PortfolioCard } from "components/Portfolio/PortfolioCard";

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>These are some of my work</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </article>
    </section>
  );
}
