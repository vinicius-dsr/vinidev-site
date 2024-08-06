import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { siteConfig } from "../_config/site";

const links = [
  {
    icon: <VscGlobe />,
    name: "Meu site",
    href: "https://vinidev.tech",
  },
  {
    icon: <FaWhatsapp />,
    name: "Whatsapp",
    href: siteConfig.links.whatsapp,
  },
  {
    icon: <FaLinkedin />,
    name: "Linkedin",
    href: siteConfig.links.linkedin,
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: siteConfig.links.github,
  },
];

export default function LinkPage() {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative mx-auto flex max-w-screen-lg flex-col items-center justify-center px-5 py-16">
        <Image
          src="/perfil-new.png"
          alt="Vinícius Reis | Desenvolver Front-end"
          width={100}
          height={100}
          quality={100}
        />
        <h2 className="mt-4 text-xl font-medium">Vinícius Reis</h2>
        <p className="mb-4 font-medium text-muted-foreground">
          Desenvolvedor Front-end
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 py-7">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="flex w-full items-center rounded-md bg-primary px-8 py-4 text-background"
              >
                <span className="w-[10vw] text-xl">{link.icon}</span>
                <h3 className="-ml-8 w-[70vw] text-center font-medium md:-ml-[116px]">
                  {link.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
