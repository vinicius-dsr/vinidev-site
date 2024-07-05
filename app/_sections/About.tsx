import Image from "next/image";
import Link from "next/link";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiFigma,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { buttonVariants } from "../_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../_components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../_components/ui/tooltip";
import { siteConfig } from "../_config/site";
import { cn } from "../_lib/utils";
const social = [
  {
    icon: <FaGithub size={20} />,
    name: "Github",
    href: siteConfig.links.github,
  },
  {
    icon: <FaLinkedin size={20} />,
    name: "Linkedin",
    href: siteConfig.links.linkedin,
  },
  {
    icon: <FaInstagram size={20} />,
    name: "Instagram",
    href: siteConfig.links.instagram,
  },
];

const about = {
  title: "Sobre mim",
  subtitle: "Desenvolvedor Front-end e apaixonado por tecnologia",
  description:
    "Com vasto conhecimento em desenvolvimento e UI/UX designer, tenho me dedicado em desenvovimento web em geral, como Landing Pages, E-commerces, Blogs, Dashboard etc. Atualmente minha especialidade é desenvolvimento Front-end. Resido em Paragominas/PA, onde atuo como freelancer.",
};

const skills = {
  title: "Minhas Habilidades",
  subtitle: "Especializado nas principais tecnologias disponíveis no mercado.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
  ],
};

export default function About() {
  return (
    <div className="mx-auto flex flex-col gap-8 py-0 md:flex-row md:py-10">
      <div className="flex flex-col items-center gap-2 rounded-md border px-5 py-7 md:w-[40%]">
        <Image
          src="/perfil-white.png"
          alt=""
          width={100}
          height={100}
          quality={100}
          className=""
        />
        <h3 className="mt-2 text-lg">Vinícius Reis</h3>
        <p className="text-muted-foreground">Desenvolver Front-end</p>
        <div className="mt-4 flex items-center gap-3">
          {social.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4">
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">{about.title}</TabsTrigger>
            <TabsTrigger value="skills">{skills.title}</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <div className="flex flex-col gap-4 px-1 py-7">
              <h3 className="text-2xl md:text-3xl">{about.subtitle}</h3>
              <p className="text-lg text-muted-foreground">
                {about.description}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="flex flex-col gap-4 px-1 py-5">
              <h3 className="text-2xl">{skills.subtitle}</h3>
              <div className="mt-3 flex max-w-[700px] flex-wrap gap-2 md:gap-3">
                <TooltipProvider>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <span className="rounded-lg border p-4 text-4xl text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary md:text-3xl">
                            {skill.icon}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
