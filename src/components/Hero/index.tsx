import { TechStack } from "components/common/TechStack";
import { VisxChart } from "components/common/visx";
import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import data from "data/data.json";
import { ParentSize } from "@visx/responsive";

const { hero } = data;

export function Hero() {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const highlighted = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!highlighted.current && highlightRef.current) {
        const annotation = annotate(highlightRef.current, {
          type: "underline",
          color: "#ff614e",
          strokeWidth: 3,
        });

        annotation.show();
        highlighted.current = true;
      }
    }, 2000);
  }, []);

  return (
    <section id="hero" className="relative section dark:bg-primary-600 h-96">
      <div className="h-full flex flex-col justify-center flex-grow">
        <h2 className="text-5xl tracking-wider mb-2">
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

      <div className="absolute top-0 w-full h-full">
        <ParentSize>
          {({ width, height }) => <VisxChart height={height} width={width} />}
        </ParentSize>
      </div>
    </section>
  );
}
