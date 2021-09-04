import { NavItem } from "components/Header/Nav/NavItem";
import { v4 } from "uuid";
import { Popover } from "@headlessui/react";
import { FaHamburger } from "react-icons/fa";

const navLinks: NavLink[] = [
  { title: "About", link: "#about" },
  { title: "Blog", link: "#blog" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "Contact", link: "#contact" },
];

export function Nav() {
  return (
    <>
      <Popover as="nav" className="relative lg:hidden">
        <Popover.Button className="bg-none fill-current text-primary-500 dark:text-primary-300">
          <FaHamburger />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 -left-12 ">
          <div className="w-full flex flex-col bg-secondary-50 rounded shadow-md dark:bg-primary-800">
            {navLinks.map((link) => (
              <NavItem key={v4()} {...link} />
            ))}
          </div>
        </Popover.Panel>
      </Popover>

      <nav className="hidden lg:inline-flex justify-between items-center w-full max-w-screen-sm">
        {navLinks.map((link) => (
          <NavItem key={v4()} {...link} />
        ))}
      </nav>
    </>
  );
}
