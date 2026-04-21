// src/app/page.tsx
import { HomePageClient } from "@/components/site/home-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Countertops & Fabrication in Los Angeles",
  description:
    "Quiroz Marble and Granite provides templating, fabrication, and installation of stone countertops and surfaces for kitchens, bathrooms, fireplaces, and outdoor spaces in the greater Los Angeles area.",
};

export default function HomePage() {
  return <HomePageClient />;
}
