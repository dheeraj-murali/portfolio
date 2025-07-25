import data from "~/assets/data.json";
import { PortfolioCard } from "~/components/sections/portfolio/portfolio-card";

const portfolio = data.portfolio;

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col gap-8 py-24">
      <h2 className="text-xl font-bold">These are some of my work</h2>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((item) => (
          <PortfolioCard {...item} key={item.title} />
        ))}
      </article>
    </section>
  );
};
