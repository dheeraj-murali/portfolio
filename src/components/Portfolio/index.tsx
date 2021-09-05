import { PortfolioCard } from "components/Portfolio/PortfolioCard";
import data from "Data/data.json";
import { v4 } from "uuid";

const { portfolio } = data;

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>{portfolio.title}</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.items.map((item) => (
          <PortfolioCard key={v4()} {...item} />
        ))}
      </article>
    </section>
  );
}
