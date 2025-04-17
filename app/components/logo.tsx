import { Link } from "react-router";
import { cn } from "~/utils/style";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn(
        "max-w-min font-bold text-xl hover:text-amber-500",
        className
      )}
    >
      @_mdrj
    </Link>
  );
};
