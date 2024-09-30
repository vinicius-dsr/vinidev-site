import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t/50 w-full bg-accent py-4 shadow-lg md:py-8">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5">
        <p className="text-base font-medium text-muted-foreground/60">
          &copy; Made by Vinícius Reis - 2024
        </p>
        <Link
          href="#"
          className="group rounded-md border-2 border-muted-foreground/80 p-2 transition-all duration-300 hover:border-primary"
        >
          <ArrowUp className="text-muted-foreground transition-all duration-300 group-hover:text-primary" />
        </Link>
      </div>
    </footer>
  );
}
