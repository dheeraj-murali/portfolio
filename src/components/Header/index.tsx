import { Logo } from "components/common/Logo";
import { Social } from "components/Header/Social";
import { useDarkMode } from "hooks/useDarkMode";
import { FaLightbulb } from "react-icons/fa";

export function Header() {
  const { theme, updateTheme } = useDarkMode();

  return (
    <>
      <header className="inline-flex justify-between items-center section section-dark">
        <Logo />

        <Social />
        <div className="">
          <button
            onClick={() => {
              updateTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            <FaLightbulb
              className={`fill-current animate-pulse ${
                theme === "dark" ? "text-secondary-400" : "text-secondary-500"
              }`}
            />
          </button>
        </div>
      </header>
    </>
  );
}
