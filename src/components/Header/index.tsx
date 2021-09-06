import { Button } from "components/common/Button";
import { Logo } from "components/common/Logo";
import { Social } from "components/Header/Social";
import { useDarkMode } from "hooks/useDarkMode";
import { FaLightbulb } from "react-icons/fa";

export function Header() {
  const { theme, updateTheme } = useDarkMode();

  return (
    <>
      <header className="container mx-auto p-5 lg:p-10 flex justify-between items-center">
        <Logo />

        <Social />
        <div className="">
          <Button
            transparent
            type="button"
            label="toggle dark/light mode"
            onClick={() => {
              updateTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            <FaLightbulb
              className={`fill-current animate-pulse ${
                theme === "dark" ? "text-secondary-400" : "text-secondary-500"
              }`}
            />
          </Button>
        </div>
      </header>
    </>
  );
}
