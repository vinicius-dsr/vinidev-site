import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/ui/accordion";

const services = {
  title: "O que eu faço",
  subtitle: "Formas de como eu posso ajudar você ou sua empresa",
  acordionServices: [
    {
      title: "Desenvolvimento Web",
      description:
        "Desenvolvimento Web em Geral, Sites, Ladding Pages, Blogs etc.",
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Desenvolvimento de aplicativos mobile para Android e IOS.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Interfaces para websites e aplicativos para qualquer nicho, focado em seu público e forte apelo visual.",
    },
    {
      title: "E-Commerce",
      description:
        "Criação de E-commerces, catalogação de produtos e configuração completa em platformas de marketplace para sua loja virtual.",
    },
    {
      title: "SEO",
      description:
        "Melhorar o posicionamento de sites nas páginas de resultados de buscadores como o Google e o Bing",
    },
  ],
};

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-medium uppercase text-muted-foreground">
          {services.title}
        </h3>
        <h1 className="text-5xl font-medium">{services.subtitle}</h1>
      </div>
      <div className="flex flex-col gap-4">
        {services.acordionServices.map((service, index) => {
          return (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={service.title} className="">
                <AccordionTrigger className="text-xl font-semibold">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  <div className="flex flex-col py-4">
                    {service.description}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
