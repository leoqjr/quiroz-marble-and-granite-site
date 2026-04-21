// src/app/estimate/page.tsx
import EstimatePageClient from "@/components/site/estimate-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Free Stone Estimate",
  description:
    "Request a free estimate from Quiroz Marble and Granite for stone countertops and surfaces in the greater Los Angeles area. Share your project details to receive a tailored, no-pressure quote.",
};

export default function EstimatePage() {
  return <EstimatePageClient />;
}
