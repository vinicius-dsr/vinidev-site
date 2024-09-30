import { siteConfig } from "@/app/_config/site";
import { cn } from "@/app/_lib/utils";
import { jetBrains } from "@/app/layout";
import { Layers } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";
import Nav from "./Nav";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b/50 sticky top-0 z-10 w-full bg-background/30 py-4 backdrop-blur-lg md:py-6">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
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
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden rounded-full md:inline-flex",
            )}
          >
            <span className="sr-only">Github</span>
            <FaGithub size={20} />
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden rounded-full md:inline-flex",
            )}
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram size={20} />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden rounded-full md:inline-flex",
            )}
          >
            <span className="sr-only">Linkedin</span>
            <FaLinkedin size={20} />
          </Link>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
