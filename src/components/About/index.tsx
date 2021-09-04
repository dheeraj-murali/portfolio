import { AboutCard } from "components/About/AboutCard";

export function About() {
  return (
    <section id="about" className="section section-dark">
      <h2>
        {`Hi there, I'm a Web designer and Front-end developer who loves
            crafting fast and easy to use web applications.`}
      </h2>
      <p className="mb-10">
        {`I love design, web development and passionate about open source. A
            big believer in minimalism and elegant design, and doing more by
            doing less. I've worked as a Front end developer for 4+ years,
            designing and developing customizable data driven user interfaces
            for Healthcare, eCommerce, Product Quality analytics domain and
            more...`}
      </p>
      <AboutCard />
    </section>
  );
}
