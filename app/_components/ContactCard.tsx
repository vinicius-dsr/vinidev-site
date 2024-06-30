import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "../_lib/utils";
import { buttonVariants } from "./ui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../_config/site";

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
    <div className="mx-auto flex w-fit flex-col gap-5 rounded-md border px-16 py-10">
      <div className="mx-auto flex flex-col items-center gap-5 py-10">
        <h3 className="text-lg font-medium uppercase text-muted-foreground">
          Bora conversar
        </h3>
        <h1 className="text-center text-4xl font-medium">
          Vamos construir algo incrível juntos?
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
      <div className="itemsc-e flex justify-between py-10">
        <p className="flex items-center gap-4 text-lg font-medium">
          Me siga nas redes sociais <ArrowRightIcon size={18} />
        </p>
        <div className="flex items-center gap-4">
          {social.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
