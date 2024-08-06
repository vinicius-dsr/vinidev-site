import Header from "@/app/_components/Header";
import { ThemeProvider } from "@/app/_components/ThemeProvider";
import { cn } from "@/app/_lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vinícius Reis - Front-end Developer",
    template: `%s | Vinícius Reis`,
  },
  icons: {
    icon: "favicon.icon",
  },
  description:
    "Vinícius Reis | Desenvolver front-end focando em desenvolvimento de websites e landig pages. Projeto sempre tendo em vista a melhor experiência do usuário, alinhada com um bom visual e o propósito/objetivo do projeto.",
  keywords: [
    "Freelancer",
    "Desenvolvedor Front-end",
    "Web Designer",
    "Programador",
    "Designer",
    "E-commerce",
    "Paragominas",
    "UI",
    "UX",
    "UI/UX",
    "Vinícius Reis",
    "vinidev",
  ],
  openGraph: {
    images: [
      "https://utfs.io/f/8881e2d3-b513-46a0-ad82-d6cfa54fdf46-ljwlqx.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-background font-sans antialiased",
          montserrat.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
