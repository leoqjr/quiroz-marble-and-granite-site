// src/app/materials/page.tsx
import MaterialsPageClient from "@/components/site/materials-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countertop Materials: Granite, Marble, Quartz & More",
  description:
    "Learn about granite, marble, quartz, quartzite, and porcelain surfaces. Quiroz Marble and Granite helps you choose the right countertop material for your kitchen, bathroom, fireplace, or outdoor project in the greater Los Angeles area.",
};

export default function MaterialsPage() {
  return <MaterialsPageClient />;
}
