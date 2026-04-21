"use client";
import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import goToSection from "@/utils/goToSection";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function Header() {
  const options = [
    { text: "Início", link: "hero" },
    { text: "Serviços", link: "highlights" },
    { text: "FAQ", link: "faq" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        console.log("Scrolled");
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full flex items-center justify-between min-h-14 py-5 px-7.5 z-50 text-neutral-50
        fixed ${scrolled && "bg-secondary"}
        `}
    >

      <Logo small />
      
      <SideMenu options={options} />

      <nav className="hidden md:flex gap-6 items-center">
        <ul
          className={`
          flex gap-6 rounded-custom`}
        >
          {options.map((option) => (
            <li
              key={option.link}
              className="p-1 px-5 rounded-full hover:text-primary cursor-pointer"
              onClick={() => goToSection(option.link)}
            >
              {option.text}
            </li>
          ))}
        </ul>

        <Button text="Chamar agora" radius={50} style="primary" customStyles="font-medium py-2"/>
      </nav>
    </header>
  );
}
