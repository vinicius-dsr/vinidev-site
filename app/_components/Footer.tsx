import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t/50 w-full bg-accent py-10 shadow-lg">
      <div className="container flex max-w-screen-xl items-center justify-between">
        <p className="text-lg font-medium">
          &copy; Made by Vinícius Reis - 2024
        </p>
        <Link
          href="#"
          className="group rounded-md border-2 border-muted-foreground p-3 transition-all duration-300 hover:border-primary"
        >
          <ArrowUp className="text-muted-foreground transition-all duration-300 group-hover:text-primary" />
        </Link>
      </div>
    </footer>
  );
}
