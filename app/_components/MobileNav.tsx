import { AlignRightIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../_config/site";
import { cn } from "../_lib/utils";

const nav = [
  {
    name: "Home",
    href: "/",
  },
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

const social = [
  {
    icon: <FaGithub size={20} />,
    name: "Github",
    href: siteConfig.links.github,
  },
  {
    icon: <FaLinkedin size={20} />,
    name: "Linkedin",
    href: siteConfig.links.linkedin,
  },
  {
    icon: <FaInstagram size={20} />,
    name: "Instagram",
    href: siteConfig.links.instagram,
  },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="inline-flex pr-0 md:hidden">
          <AlignRightIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col items-center gap-8 py-10">
          {nav.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="text-lg font-medium uppercase"
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex gap-2">
            {social.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full py-7 text-base",
            )}
          >
            Solicitar orçamento
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
