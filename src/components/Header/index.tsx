import { Logo } from "components/common/Logo";
import { Nav } from "components/Header/Nav";
import { Social } from "components/Header/Social";
import { useDarkMode } from "hooks/useDarkMode";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

export function Header() {
  const { theme, updateTheme } = useDarkMode();

  return (
    <>
      <header className="inline-flex justify-between items-center w-full p-3 px-5 lg:px-10 dark:bg-primary-800">
        <Logo />

        <Nav />
        <Social />
        <div className="">
          <button
            onClick={() => {
              updateTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <FaLightbulb /> : <FaRegLightbulb />}
          </button>
        </div>
      </header>
    </>
  );
}
