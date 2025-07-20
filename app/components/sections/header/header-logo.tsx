import { Link } from "react-router";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      to={"/"}
      className={cn(
        buttonVariants({ variant: "link" }),
        "font-bold",
        className
      )}
    >
      @_mdrj
    </Link>
  );
};
