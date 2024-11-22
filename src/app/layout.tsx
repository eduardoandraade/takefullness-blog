import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TakeFullness",
  description: "Descubra a Take, uma plataforma inovadora que conecta você ao bem-estar. Explore conteúdos sobre saúde, equilíbrio e mindfulness, ajudando você a viver sua melhor versão e a aproveitar o momento presente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="px-8 py-5">
            {children}

            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
