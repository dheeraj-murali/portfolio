import { cn } from "~/lib/utils";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <h1
      className={cn(
        "max-w-min font-bold text-xl hover:text-primary",
        className
      )}
    >
      @_mdrj
    </h1>
  );
};
