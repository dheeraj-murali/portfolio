import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotationConfig } from "rough-notation/lib/model";
import { ParentSize } from "@visx/responsive";

import { TechStack } from "~/components/techStack";
import { Canvas } from "./hero-canvas";

const config: RoughAnnotationConfig = {
  type: "underline",
  color: "var(--primary)",
  strokeWidth: 5,
};

export const Hero = () => {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const highlighted = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!highlighted.current && highlightRef.current) {
        const annotation = annotate(highlightRef.current, config);

        annotation.show();
        highlighted.current = true;
      }
    }, 1000);
  }, []);

  return (
    <section id="hero" className="relative h-[70vh]">
      <div className="h-full flex flex-col justify-center">
        <h1 className="font-black text-5xl tracking-wider mb-2">
          Hey, I&lsquo;m <span ref={highlightRef}>Dheeraj.</span>
        </h1>
        <h2 className="text-muted-foreground font-bold text-2xl pt-2">
          A digital product developer.
        </h2>
        <p className="pt-10 text-muted-foreground">
          I love designing and developing fast and easy to use web applications.
        </p>

        <TechStack />
      </div>

      <div className="absolute top-0 w-full h-full">
        <ParentSize>
          {({ width, height }) => <Canvas height={height} width={width} />}
        </ParentSize>
      </div>
    </section>
  );
};
