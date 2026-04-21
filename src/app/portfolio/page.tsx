// src/app/portfolio/page.tsx
import PortfolioPageClient from "@/components/site/portfolio-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Countertop & Surface Projects | Los Angeles",
  description:
    "View selected projects from Quiroz Marble and Granite, including kitchens, bathrooms, fireplaces, outdoor spaces, and commercial interiors fabricated and installed in the greater Los Angeles area.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
