import { AboutPageClient } from "@/components/site/about-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Quiroz Marble and Granite – Family-Owned Stone Fabrication Since 2000 | Los Angeles",
  description:
    "Learn about Quiroz Marble and Granite, a family-owned stone fabrication shop in Los Angeles since 2000, focused on careful templating, in-house fabrication, and clean, calm installs.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
