import Hero from "@/app/_sections/Hero";

export default function Home() {
  return (
    <>
      {/* Main section */}
      <main className="relative h-[80vh] w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <Hero />
      </main>

      {/* About section */}

      {/* Service section */}

      {/* Project ection */}
    </>
  );
}
