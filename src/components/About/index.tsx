import { AboutCard } from "components/About/AboutCard";
import data from "data/data.json";

const { about } = data;

export function About() {
  return (
    <section id="about" className="section ">
      <h2>{about.title}</h2>
      <p className="mb-10">{about.body}</p>
      <AboutCard />
    </section>
  );
}
