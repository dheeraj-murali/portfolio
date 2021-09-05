import { TechStack } from "components/common/TechStack";
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
        <h2 className="font-cursive text-5xl tracking-wider mb-2">
          Hey, I&lsquo;m <span ref={highlightRef}>dheeraj</span>
        </h2>
        <h2 className="text-primary-400">A digital product developer.</h2>

        <p>
          {`I love designing and developing fast and easy to use web applications.`}
        </p>

        <TechStack
          react
          tailwind
          typescript
          next
          gatsby
          aws
          netlify
          bootstrap
        />
      </div>

      <HeroImage />
    </section>
  );
}
