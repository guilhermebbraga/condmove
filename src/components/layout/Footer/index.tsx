import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const socialContacts = [
    {
      link: "https://github.com/guilhermebbraga",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/guilherme-b-9aa8ab265",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/cleanstackbr",
      icon: <FaInstagram />,
    },
  ];

  const contacts = [
    {
      link: "https://github.com/guilhermebbraga",
      icon: <MdEmail />,
      text: "contato@gmail.com",
    },
    {
      link: "https://www.linkedin.com/in/guilherme-b-9aa8ab265",
      icon: <BsTelephoneFill />,
      text: "+55 (11) 91234-5678",
    },
    {
      link: "https://www.instagram.com/cleanstackbr",
      icon: <IoMdPin />,
      text: "Base Interna - Portaria Principal",
    },
  ];

  const quickLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Serviços",
      link: "/solucoes",
    },
    {
      title: "Portfólio",
      link: "https://guilhermeb.vercel.app",
    },
    {
      title: "Contato",
      link: "mailto:guilherme.braga@cleanstack.com.br",
    },
  ];

  return (
    <footer
      className="
        w-full min-h-30 bg-secondary p-10 gap-10 grid justify-items-center relative"
    >
      <div className="w-full grid md:grid-cols-4 gap-10">
        <div className="flex w-full flex-col items-baseline md:col-span-2">
          <Logo />

          <p className="text-neutral-300 mt-1 mb-5">
            Inovando a mobilidade residencial com soluções tecnológicas e
            sustentáveis para o seu condomínio.
          </p>

          <div className="flex gap-5">
            {socialContacts.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 grid place-items-center text-[18px]
                 rounded-full bg-gray-800 text-primary duration-300 hover:bg-gray-600"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="font-medium text-lg text-neutral-50">Links Úteis</h4>

          <nav className="flex flex-col gap-2 text-neutral-300 mt-1">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="duration-300 hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-full">
          <h4 className="font-medium text-lg text-neutral-50">Contato</h4>

          <ul className="flex flex-col gap-2 text-neutral-300 mt-1">
            {contacts.map((contact, index) => (
              <li className="flex items-center gap-1" key={index}>
                <div className="text-primary">{contact.icon}</div>

                <span>{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-white/10"></div>

      <div className="text-center text-neutral-300">
        <p>&copy; 2026 CondMove. Todos os direitos reservados. </p>

        <Link target="_blank" href='https://cleanstack.com.br/solucoes' className="text-sm cursor-pointer opacity-20 hover:text-cyan-400 hover:opacity-100">Desenvolvido por CleanStack Solutions</Link>
      </div>
    </footer>
  );
}
