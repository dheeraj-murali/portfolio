import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    const isDarkPreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localStorageTheme === "dark" || isDarkPreferred) {
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
