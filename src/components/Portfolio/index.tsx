import { PortfolioCard } from "components/Portfolio/PortfolioCard";

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>These are some of my work</h2>
      <article>
        <PortfolioCard />
      </article>
    </section>
  );
}
