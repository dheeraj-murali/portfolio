import { HeroImage } from "components/Hero/HeroImage";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function Hero() {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (highlightRef.current) {
        const annotation = annotate(highlightRef.current, {
          type: "highlight",
          color: "#fab95b80",
        });

        annotation.show();
      }
    }, 2000);
  }, []);

  return (
    <section
      id="hero"
      className="section grid grid-cols-1 md:grid-cols-2 gap-3 dark:bg-primary-600"
    >
      <div className="h-full flex flex-col justify-center">
        <h2 className="font-cursive text-8xl tracking-wider">
          Hey, I&lsquo;m a <span ref={highlightRef}>digital</span> product
          developer.
        </h2>

        <p>
          {`I’m Dheeraj a Web designer and Front-end developer, who loves
            crafting fast and easy to use web applications.`}
        </p>
      </div>

      <HeroImage />
    </section>
  );
}
