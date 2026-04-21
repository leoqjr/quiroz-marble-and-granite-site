// src/app/contact/page.tsx
import ContactPageClient from "@/components/site/contact-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Quiroz Marble and Granite",
  description:
    "Contact Quiroz Marble and Granite to discuss stone fabrication and installation projects in the greater Los Angeles area. Call, email, or send project details to get started.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
