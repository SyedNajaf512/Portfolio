import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Najaf Turab | Full Stack Developer & AI Specialist",
  description: "A premium portfolio showcasing Full Stack Development, AI Solutions, and Digital Marketing expertise.",
};

import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          outfit.variable,
          geistMono.variable,
          "antialiased bg-background text-foreground min-h-screen selection:bg-primary/20 selection:text-primary"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
