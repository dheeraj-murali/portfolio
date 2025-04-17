import { Lightbulb } from "lucide-react";
import { Logo } from "./logo";
import { Social } from "./social";
import { Button } from "./ui/button";
import { useDarkMode } from "~/hooks/useDarkMode";

export const Header = () => {
  const { theme, updateTheme } = useDarkMode();

  return (
    <header className="grid grid-cols-3 items-center my-10 px-4">
      <Logo className="justify-self-start" />

      <Social className="justify-self-center" />

      <Button
        className="justify-self-end"
        variant="ghost"
        size="icon"
        onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
      >
        <Lightbulb className="size-4 animate-pulse dark:text-amber-500" />
      </Button>
    </header>
  );
};
