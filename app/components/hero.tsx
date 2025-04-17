import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { TechStack } from "./techSatck";

export const Hero = () => {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const highlighted = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!highlighted.current && highlightRef.current) {
        const annotation = annotate(highlightRef.current, {
          type: "underline",
          color: "#ff614e80",
          strokeWidth: 5,
        });

        annotation.show();
        highlighted.current = true;
      }
    }, 1000);
  }, []);

  return (
    <section id="hero" className="relative section h-[30rem] px-4">
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

      {/* <div className="absolute top-0 w-full h-full">
        <ParentSize>
          {({ width, height }) => <VisxChart height={height} width={width} />}
        </ParentSize>
      </div> */}
    </section>
  );
};
