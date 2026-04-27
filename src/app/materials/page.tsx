// src/app/materials/page.tsx
import { MaterialsPageClient } from "@/components/site/materials-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Countertop Materials | Granite, Marble, Quartz & More | Quiroz Marble and Granite",
  description:
    "Explore premium countertop materials from Quiroz Marble and Granite, including granite, marble, quartz, quartzite, and porcelain surfaces for kitchens, bathrooms, fireplaces, and outdoor spaces in the greater Los Angeles area.",
};

export default function MaterialsPage() {
  return <MaterialsPageClient />;
}
