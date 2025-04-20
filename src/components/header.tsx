import { Lightbulb } from "lucide-react";

import { useDarkMode } from "@/hooks/useDarkMode";
import { Logo } from "./logo";
import { Social } from "./social";
import { Button } from "./ui/button";

export const Header = () => {
  const { theme, updateTheme } = useDarkMode();

  return (
    <header className="grid grid-cols-3 items-center">
      <Logo className="justify-self-start" />

      <Social className="justify-self-center" />

      <Button
        aria-label="dark mode toggle"
        className="justify-self-end"
        variant="ghost"
        size="icon"
        onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
      >
        <Lightbulb className="size-4 animate-pulse dark:text-primary" />
      </Button>
    </header>
  );
};
