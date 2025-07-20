import { Lightbulb } from "lucide-react";

import { Logo } from "~/components/sections/header/header-logo";
import { Social } from "~/components/sections/header/header-social";
import { Button } from "~/components/ui/button";

export const Header = () => {
  const updateTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");

    if (isCurrentlyDark) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="flex flex-row items-center  justify-between w-full">
      <Logo />

      <Social />

      <Button
        aria-label="dark mode toggle"
        variant="ghost"
        size="icon"
        onClick={() => updateTheme()}
      >
        <Lightbulb className="size-4 animate-pulse" />
      </Button>
    </header>
  );
};
