import Image from "next/image";

const projects = {
  title: "Meus projetos",
  subtitle: "Conheça um pouco do meu trabalho",
  projectList: [
    {
      name: "Blog MDX",
      imageURL: "/project-blog.png",
      tag: "Blog",
      date: "2024",
    },
    {
      name: "Reis & Reis - Advocacia",
      imageURL: "/project-adv.png",
      tag: "Lading Page",
      date: "2024",
    },
    {
      name: "Catálogo Digital",
      imageURL: "/project-catalogo.png",
      tag: "E-Commerce",
      date: "2024",
    },
    {
      name: "Cardápio Digital",
      imageURL: "/project-cardapio.png",
      tag: "E-Commerce",
      date: "2024",
    },
  ],
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium uppercase text-muted-foreground">
        {projects.title}
      </h3>
      <h1 className="text-4xl font-medium">{projects.subtitle}</h1>
      <div className="grid grid-cols-1 gap-7 py-5 md:grid-cols-2">
        {projects.projectList.map((project, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <Image
                alt={project.name}
                src={project.imageURL}
                width={300}
                height={300}
                quality={100}
                className="mt-5 h-auto w-full bg-contain"
              />
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
    </div>
  );
}
