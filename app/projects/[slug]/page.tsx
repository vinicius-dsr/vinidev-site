"use client";

import { projects } from "@/app/_data/db";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-xl py-16">
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-medium uppercase text-muted-foreground md:text-lg">
          Projeto
        </h3>
        <h1 className="mb-5 text-3xl font-medium md:mb-0 md:text-5xl">
          {project.name}
        </h1>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}
