import data from "~/data/portfolio.json";
import { PortfolioCard } from "./portfolio-card";

const portfolio = data.portfolio;

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
    >
      {portfolio.map((item) => (
        <PortfolioCard {...item} key={item.title} />
      ))}
    </section>
  );
};
