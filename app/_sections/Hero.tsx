import { cn } from "@/app/_lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BadgeText } from "../_components/BadgeText";
import { buttonVariants } from "../_components/ui/button";
import { siteConfig } from "@/app/_config/site";

export default function Hero() {
  return (
    <div className="container relative mx-auto max-w-screen-lg py-24">
      <div className="flex flex-col gap-6 text-center">
        <BadgeText />
        <h2 className="text-7xl font-medium">
          Freelancer, Designer & Desenvolvedor
        </h2>
        <p className="mx-auto max-w-3xl text-lg font-medium text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
          inventore minima adipisci ducimus tenetur autem similique voluptatum
          qui ad doloremque minus aut, itaque dolor earum provident, quae
          nesciunt maxime quas?
        </p>
        <div className="mx-auto mt-5 flex items-center gap-4 text-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group flex w-fit items-center gap-2 rounded-full py-7 text-base",
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
              "flex w-fit items-center gap-2 rounded-full py-7 text-base",
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
