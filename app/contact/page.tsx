import Footer from "../_components/Footer";
import ProjectForm from "../_components/ProjectForm";

export default function page() {
  return (
    <main className="relative h-full w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative mx-auto flex max-w-screen-lg flex-col px-5 py-12 md:py-24">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h3 className="text-base font-medium uppercase text-muted-foreground md:text-lg">
            Novo Projeto
          </h3>
          <h1 className="text-3xl font-medium md:mb-0 md:text-5xl">
            Vamos começar?
          </h1>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Dê o primeiro passo preenchendo o formulário com as informações do
            projeto.
          </p>
        </div>
        <ProjectForm />
      </div>
      <Footer />
    </main>
  );
}
