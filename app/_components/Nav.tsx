import Link from "next/link";

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
];
export default function Nav() {
  return (
    <nav className="flex items-center gap-4">
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
