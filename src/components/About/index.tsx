import { AboutCard } from "components/About/AboutCard";

export function About() {
  return (
    <section id="about" className="section section-dark">
      <h2>
        {`Hey, I'm a Web designer and Front-end developer who loves
            crafting fast and easy to use web applications.`}
      </h2>
      <p className="mb-10">
        {`I passionate about design, web development and open source. A
            big believer in minimalism and elegant design, and doing more by
            doing less. I've worked as a Front end developer for 4+ years,
            designing and developing data driven user interfaces
            for Healthcare, eCommerce, Product Quality analytics, FX domain and
            more...`}
      </p>
      <AboutCard />
    </section>
  );
}
