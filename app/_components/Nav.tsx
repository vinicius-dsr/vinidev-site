import Link from "next/link";

const nav = [
  {
    name: "Sobre",
    href: "/#about",
  },
  {
    name: "Serviços",
    href: "/#services",
  },
  {
    name: "Projetos",
    href: "/#projects",
  },
  {
    name: "Contato",
    href: "/contact",
  },
];
export default function Nav() {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      {nav.map((link) => {
        return (
          <Link
            key={link.name}
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
