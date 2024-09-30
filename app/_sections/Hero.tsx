import { siteConfig } from "@/app/_config/site";
import { cn } from "@/app/_lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BadgeText } from "../_components/BadgeText";
import { buttonVariants } from "../_components/ui/button";

export default function Hero() {
  return (
    <div className="container relative mx-auto max-w-screen-lg py-14 md:py-24">
      <div className="flex flex-col gap-6 text-center">
        <BadgeText />
        <h2 className="text-[31px] font-medium md:text-7xl">
          Freelancer, Designer & Desenvolvedor
        </h2>
        <p className="mx-auto py-3 text-base font-medium text-muted-foreground md:max-w-3xl md:py-5 md:text-lg">
          Transformo suas ideias em experiências digitais incríveis e
          intuitivas. Vamos trabalhar juntos para trazer seus projetos à vida e
          encantar seus usuários!
        </p>
        <div className="mx-auto mt-5 flex flex-col items-center gap-4 text-center md:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group flex w-full items-center gap-2 rounded-full py-7 text-base md:w-fit",
            )}
          >
            Solicitar orçamento
            <ArrowUpRightIcon
              size={17}
              className="transition-all duration-300 group-hover:rotate-45"
            />
          </Link>
          <Link
            href={siteConfig.links.whatsapp}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "flex w-full items-center gap-2 rounded-full py-7 text-base md:w-fit",
            )}
          >
            Fale diretamente comigo
            <FaWhatsapp size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
