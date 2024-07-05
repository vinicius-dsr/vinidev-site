import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/_lib/utils";
import Header from "@/app/_components/Header";
import { ThemeProvider } from "@/app/_components/ThemeProvider";
import { siteConfig } from "@/app/_config/site";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Freelancer",
    "Desenvolvedor Front-end",
    "Web Designer",
    "Programador",
    "Designer",
    "E-commerce",
  ],
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
