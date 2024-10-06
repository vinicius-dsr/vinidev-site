import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../_components/ui/button";
import { cn } from "../_lib/utils";

const projects = {
  title: "Meus projetos",
  subtitle: "Conheça um pouco do meu trabalho",
  projectList: [
    {
      name: "Agenda Paragominas",
      slug: "agenda-paragominas",
      imageURL:
        "https://utfs.io/f/FRVsZCSgds63GPW7SgrGDo7E5ZMVRCJ0dpvaf26WjOg9cFNL",
      tag: "Web App",
      date: "2024",
    },
    {
      name: "Blog MDX",
      slug: "blog-mdx",
      imageURL:
        "https://utfs.io/f/FRVsZCSgds63g7pidOKi9fuI6HUAVmogTlD1bcSeQa0dwqp8",
      tag: "Blog",
      date: "2024",
    },
    {
      name: "Reis & Reis - Advocacia",
      slug: "reis-reis-advocacia",
      imageURL:
        "https://utfs.io/f/FRVsZCSgds63zo4X147PpFSchIKjQxHXruADbyBiGvaMq17s",
      tag: "Lading Page",
      date: "2024",
    },
    {
      name: "Sunclean - Energia Solar",
      slug: "sunclean-energia-solar",
      imageURL:
        "https://utfs.io/f/FRVsZCSgds63SdvZzzyePxKjV4kv25pclJYUh3LRTsFgtdBA",
      tag: "Lading Page",
      date: "2024",
    },
  ],
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-medium uppercase text-muted-foreground md:text-lg">
        {projects.title}
      </h3>
      <h1 className="text-3xl font-medium md:mb-0 md:text-5xl">
        {projects.subtitle}
      </h1>
      <div className="grid grid-cols-1 gap-7 py-5 md:grid-cols-2">
        {projects.projectList.map((project) => {
          return (
            <div key={project.name} className="flex flex-col gap-4">
              <div className="group relative">
                <Image
                  alt={project.name}
                  src={project.imageURL}
                  width={500}
                  height={500}
                  quality={100}
                  className="mt-5 h-auto w-full bg-contain transition-all duration-500 group-hover:scale-90 group-hover:blur-sm"
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
              {/* <Image
                alt={project.name}
                src={project.imageURL}
                width={500}
                height={500}
                quality={100}
                className="mt-5 h-auto w-full bg-contain"
              /> */}
              <h3 className="text-xl font-medium">{project.name}</h3>
              <hr />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/5 bg-neutral-100 px-3 py-1.5 text-base text-primary transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  {project.tag}
                </span>
                <p className="font-medium">{project.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-4 md:w-full md:flex-row md:justify-between">
        <div className="hidden items-center gap-4 md:flex">
          <h2 className="text-xl font-medium">Ver todos</h2>
          <ArrowRight className="h-5 w-5" />
        </div>
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full py-6 text-base font-medium",
          )}
        >
          Todos os projetos
        </Link>
      </div>
    </div>
  );
}
