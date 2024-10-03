"use client";

import Footer from "@/app/_components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { projects } from "@/app/_data/db";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative h-full w-full bg-background">
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative mx-auto mb-10 max-w-screen-xl px-5 py-8 md:px-0 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <Breadcrumb>
                <BreadcrumbList className="text-base md:text-lg">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/projects">Projetos</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{project.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h2 className="mt-2 text-lg font-medium md:mt-4 md:text-2xl">
                {project.smallDescription}
              </h2>
            </div>
            <ArrowDown size={32} className="hidden md:inline-flex" />
          </div>
          <Image
            src={project.bannerImg}
            alt={project.name}
            width={500}
            height={500}
            quality={100}
            className="mt-0 h-auto w-full md:mt-4"
          />
          <div className="mb-4 flex flex-col gap-8">
            <div className="hidden justify-between md:flex">
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Tecnologias
                </h3>
                <span>{project.techs}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Categoria
                </h3>
                <span>{project.tag}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Data
                </h3>
                <span>{project.date}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Links
                </h3>
                <div className="flex gap-2">
                  {project.links.map((href) => (
                    <Link
                      href={href.link}
                      key={href.title}
                      target="_black"
                      className="transition-all duration-500 hover:underline"
                    >
                      {href.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p>{project.largeDescription}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase text-muted-foreground">
              Imagens do projeto
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
              {project.images?.map((image) => (
                <Image
                  key={image.nome}
                  src={image.imagem}
                  alt={image.nome}
                  width={500}
                  height={500}
                  quality={100}
                  className="h-auto w-full"
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 md:hidden">
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Tecnologias
                </h3>
                <span>{project.techs}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Categoria
                </h3>
                <span>{project.tag}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Data
                </h3>
                <span>{project.date}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium uppercase text-muted-foreground">
                  Links
                </h3>
                <div className="flex gap-2">
                  {project.links.map((href) => (
                    <Link
                      href={href.link}
                      key={href.title}
                      target="_black"
                      className="transition-all duration-500 hover:underline"
                    >
                      {href.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
