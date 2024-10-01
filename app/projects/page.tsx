import { LinkIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Footer from "../_components/Footer";
import { buttonVariants } from "../_components/ui/button";
import { projects } from "../_data/db";
import { cn } from "../_lib/utils";

export default function ProjectPage() {
  return (
    <div className="relative h-[80vh] w-full bg-background">
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="container relative mx-auto max-w-screen-xl py-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-medium uppercase text-muted-foreground md:text-lg">
            Meus projetos
          </h3>
          <h1 className="text-3xl font-medium md:mb-0 md:text-5xl">
            Conheça um pouco do meu trabalho
          </h1>
          <div className="grid grid-cols-1 gap-7 py-5 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col gap-4">
                <div className="group relative">
                  <Image
                    alt={project.name}
                    src={project.imageUrl}
                    width={500}
                    height={500}
                    quality={100}
                    className="mt-5 h-auto w-full bg-contain transition-all duration-500 group-hover:blur-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "rounded-full bg-primary px-2 py-8 text-background shadow-md hover:bg-background",
                      )}
                    >
                      <Plus size={52} />
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-medium">{project.name}</h3>
                <hr />
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/5 bg-neutral-100 px-3 py-1.5 text-base text-primary transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    {project.tag}
                  </span>
                  <p className="font-medium">
                    {project.date ? project.date : "Sem data"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
