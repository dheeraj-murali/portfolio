import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const updateTheme = (theme: "dark" | "light") => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return { theme, updateTheme };
}
