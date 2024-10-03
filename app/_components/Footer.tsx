import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t/50 w-full bg-accent py-4 shadow-lg md:py-8">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 md:px-0">
        <p className="text-sm font-medium text-muted-foreground/60 md:text-base">
          &copy; Made by Vinícius Reis - 2024
        </p>
        <Link
          href="#"
          className="group relative flex items-center justify-center overflow-hidden rounded-full border-2 border-muted-foreground/50 p-2 transition-all duration-300 hover:border-primary md:p-3"
        >
          {/* Seta que desaparece subindo */}
          <ArrowUpIcon className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0" />

          {/* Seta que aparece subindo de baixo */}
          <ArrowUpIcon className="absolute translate-y-full text-primary opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
        </Link>
      </div>
    </footer>
  );
}
