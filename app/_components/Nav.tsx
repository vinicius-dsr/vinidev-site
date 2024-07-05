import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

const nav = [
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Serviços",
    href: "#services",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Contato",
    href: "/contact",
  },
];
export default function Nav() {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      {nav.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-all hover:text-primary"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
