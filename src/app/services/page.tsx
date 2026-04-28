// src/app/services/page.tsx
import { ServicesPageClient } from "@/components/site/services-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Fabrication Services | Quiroz Marble and Granite – Los Angeles",
  description:
    "Explore stone fabrication services from Quiroz Marble and Granite, including kitchen countertops, bathroom vanities, fireplaces, outdoor kitchens, commercial interiors, and custom stone details in the greater Los Angeles area.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
