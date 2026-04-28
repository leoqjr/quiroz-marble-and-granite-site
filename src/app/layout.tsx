// src/app/layout.tsx
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Body / UI font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Heading / display font for hero & section titles
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Quiroz Marble and Granite | Stone Fabrication in Los Angeles",
    template: "%s | Quiroz Marble and Granite",
  },
  description:
    "Family-run stone fabrication shop providing templating, fabrication, and installation for kitchens, bathrooms, fireplaces, outdoor spaces, and commercial interiors in the greater Los Angeles area.",
  metadataBase: new URL("https://www.quirozmarblegranite.com"),
  openGraph: {
    title: "Quiroz Marble and Granite | Stone Fabrication in Los Angeles",
    description:
      "Premium stone fabrication and installation for kitchens, bathrooms, fireplaces, outdoor spaces, and commercial interiors in the greater Los Angeles area.",
    url: "https://www.quirozmarblegranite.com",
    siteName: "Quiroz Marble and Granite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiroz Marble and Granite | Stone Fabrication in Los Angeles",
    description:
      "Stone fabrication and installation for kitchens, baths, fireplaces, outdoor spaces, and commercial interiors across Los Angeles.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // Attach font variables here so globals.css can use them
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
