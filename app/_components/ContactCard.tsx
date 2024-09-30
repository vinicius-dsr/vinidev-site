import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../_config/site";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";

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

export default function ContactCard() {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 rounded-md border p-5 md:w-fit md:px-16 md:py-10">
      <div className="mx-auto flex flex-col items-center gap-5 py-5 md:py-10">
        <h3 className="text-base font-medium uppercase text-muted-foreground md:text-lg">
          Gostou do que viu?
        </h3>
        <h1 className="text-center text-3xl font-medium md:mb-0 md:text-5xl">
          Então vamos construir algo incrível juntos !
        </h1>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "group mt-5 flex w-fit items-center gap-2 rounded-full py-7 text-base",
          )}
        >
          Solicitar proposta
          <ArrowUpRightIcon
            size={17}
            className="transition-all duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>
      <hr />
      <div className="flex flex-col items-center gap-5 py-5 md:flex-row md:justify-between md:py-10">
        <p className="flex items-center gap-4 text-lg font-medium">
          Me siga nas redes sociais{" "}
          <ArrowRightIcon size={18} className="hidden md:inline-flex" />
        </p>
        <div className="flex items-center gap-4">
          {social.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full",
                )}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
