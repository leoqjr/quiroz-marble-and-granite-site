// src/app/layout.tsx
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiroz Marble and Granite | Tailored Stone Surfaces",
  description:
    "Quiroz Marble and Granite crafts tailored stone surfaces for modern kitchens, bathrooms, fireplaces, and commercial spaces.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F7F4] text-[#1F2933] antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
