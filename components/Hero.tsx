import RetroGrid from "./magicui/retro-grid";

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex flex-col items-center justify-center gap-4 py-32">
        <span>aa</span>
        <h2>aaa</h2>
        <p>aa</p>
      </div>
    </div>
  );
}
