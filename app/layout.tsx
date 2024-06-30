import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/_lib/utils";
import Header from "@/app/_components/Header";
import { ThemeProvider } from "@/app/_components/ThemeProvider";
import { siteConfig } from "@/app/_config/site";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
