import { TechStack } from "components/common/TechStack";
import { HeroImage } from "components/Hero/HeroImage";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import data from "data/data.json";

const { hero } = data;

export function Hero() {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const highlighted = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!highlighted.current && highlightRef.current) {
        const annotation = annotate(highlightRef.current, {
          type: "highlight",
          color: "#fab95b80",
        });

        annotation.show();
        highlighted.current = true;
      }
    }, 2000);
  }, []);

  return (
    <section
      id="hero"
      className="section grid grid-cols-1 md:grid-cols-2 gap-3 dark:bg-primary-600"
    >
      <div className="h-full flex flex-col justify-center">
        <h2 className="font-cursive text-5xl tracking-wider mb-2">
          Hey, I&lsquo;m <span ref={highlightRef}>dheeraj</span>
        </h2>
        <h2 className="text-primary-400">{hero.subtitle}</h2>

        <p>{hero.body}</p>

        <TechStack
          react
          tailwind
          typescript
          next
          gatsby
          aws
          netlify
          bootstrap
          graphql
        />
      </div>

      <HeroImage />
    </section>
  );
}
