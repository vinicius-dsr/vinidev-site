"use client";

import Footer from "@/app/_components/Footer";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogImage,
  DialogTrigger,
} from "@/app/_components/core/dialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { projects } from "@/app/_data/db";
import { ArrowDown, XIcon } from "lucide-react";
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
            width={700}
            height={700}
            quality={100}
            className="mb-0 mt-0 h-auto w-full md:mb-4 md:mt-4"
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

          {/* Image dos projetos */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase text-muted-foreground">
              Imagens do projeto
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
              {project.images?.map((image) => (
                <Dialog
                  key={image.nome}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <DialogTrigger>
                    <DialogImage
                      src={image.imagem}
                      alt={image.nome}
                      className="h-[200px] w-full rounded-[4px] object-cover md:h-[450px]"
                    />
                  </DialogTrigger>
                  <DialogContainer>
                    <DialogContent className="relative">
                      <DialogImage
                        src={image.imagem}
                        alt={image.nome}
                        className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
                      />
                    </DialogContent>
                    <DialogClose
                      className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
                      variants={{
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                      }}
                    >
                      <XIcon className="h-5 w-5 text-zinc-500" />
                    </DialogClose>
                  </DialogContainer>
                </Dialog>
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
