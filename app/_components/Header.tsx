import { jetBrains } from "@/app/layout";
import { cn } from "@/app/_lib/utils";
import { Layers } from "lucide-react";
import Link from "next/link";
import Nav from "./Nav";
import { siteConfig } from "@/app/_config/site";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header className="border-b/50 sticky top-0 z-10 w-full bg-background/30 py-6 backdrop-blur-lg">
      <div className="container flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-md bg-gradient-to-br from-primary/90 via-primary/70 to-primary/40 p-1">
              <Layers size={22} className="text-bold text-background" />
            </div>
            <p
              className={cn(
                "font-mono text-xl font-medium",
                jetBrains.variable,
              )}
            >
              vinidev<span className="animate-pulse">_</span>
            </p>
          </Link>
          <Nav />
        </div>
        <div className="flex items-center">
          <Link
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href={siteConfig.links.instagram}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <FaLinkedin size={20} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
