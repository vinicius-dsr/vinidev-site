import Hero from "@/app/_sections/Hero";
import ContactCard from "./_components/ContactCard";
import Footer from "./_components/Footer";
import About from "./_sections/About";
import Projects from "./_sections/Projects";
import Services from "./_sections/Services";

export default function Home() {
  return (
    <>
      {/* Main section */}
      <main className="relative h-[80vh] w-full bg-background">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <Hero />
      </main>

      {/* About section */}
      <section
        id="about"
        className="mx-auto max-w-screen-xl px-5 py-20 md:px-0"
      >
        <About />
      </section>

      {/* Service section */}
      <section
        id="services"
        className="mx-auto max-w-screen-xl px-5 py-20 md:px-0"
      >
        <Services />
      </section>

      {/* Project section */}
      <section
        id="projects"
        className="mx-auto max-w-screen-xl px-5 py-20 md:px-0"
      >
        <Projects />
      </section>

      {/* Contact card */}
      <section className="mx-auto max-w-screen-xl px-5 py-20 md:px-0">
        <ContactCard />
      </section>

      <Footer />
    </>
  );
}
