"use client";

import { RiMenu2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import goToSection from "@/utils/goToSection";

interface SideMenuProps {
  options: { text: string; link: string }[];
}

export default function SideMenu({ options }: SideMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }

    return () => document.body.classList.remove("no-overflow");
  }, [open]);

  const handleNavClick = (link: string) => {
    goToSection(link);
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`grid place-items-center text-xl w-10 h-10 rounded-lg`}
      >
        {open ? <RxHamburgerMenu /> : <RiMenu2Line />}
      </button>

      <div
        className={`
        fixed inset-0 bg-secondary overflow-hidden mt-18
        ${open ? "h-[90vh]" : "h-0"}
        `}
      >
        <nav>
          <ul
            className={`flex flex-col px-5 pt-20 gap-5 w-full ${open ? "opacity-100" : "opacity-0"}`}
          >
            {options.map((option) => (
              <li
                key={option.link}
                className="px-5 py-2.5 text-center rounded-xl hover:bg-primary hover:text-secondary cursor-pointer"
                onClick={() => handleNavClick(option.link)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
