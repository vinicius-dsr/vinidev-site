"use client";

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
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative h-[80vh] w-full bg-background">
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="container relative mx-auto max-w-screen-xl py-16">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <Breadcrumb>
              <BreadcrumbList className="text-lg">
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
          </div>
          <ArrowDown size={32} className="hidden md:inline-flex" />
        </div>
        {/* banner image */}
        <Image src="" alt="" />
      </div>
    </div>
  );
}
