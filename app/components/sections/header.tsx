import { Lightbulb } from "lucide-react";

import { Logo } from "~/components/logo";
import { Social } from "~/components/social";
import { Button } from "~/components/ui/button";
import { useDarkMode } from "~/hooks/useDarkMode";

export const Header = () => {
  const { theme, updateTheme } = useDarkMode();

  return (
    <header className="flex flex-row items-center  justify-between w-full">
      <Logo />

      <Social />

      <Button
        aria-label="dark mode toggle"
        variant="ghost"
        size="icon"
        onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
      >
        <Lightbulb className="size-4 animate-pulse" />
      </Button>
    </header>
  );
};
