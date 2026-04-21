// src/app/services/page.tsx
import { BookingButton } from "@/components/site/booking-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Fabrication Services in Los Angeles",
  description:
    "Explore stone fabrication services from Quiroz Marble and Granite, including kitchen countertops, bathroom vanities, fireplaces, outdoor kitchens, commercial interiors, and custom stone details in the greater Los Angeles area.",
};

const services = [
  {
    title: "Kitchen countertops",
    description:
      "Full-height backsplashes, waterfall islands, and refined perimeter runs in granite, marble, quartz, and porcelain—templated and fabricated for tight seams and crisp edges.",
    details:
      "Ideal for full remodels, builder packages, and premium kitchen refreshes.",
  },
  {
    title: "Bathrooms & vanities",
    description:
      "Vanity tops, tub surrounds, ledges, and shower benches with carefully planned seams and edges so every surface feels continuous and calm.",
    details:
      "Perfect for primary suites, guest baths, and multi‑unit projects.",
  },
  {
    title: "Fireplaces & feature walls",
    description:
      "Surrounds, mantels, and slab‑style feature walls that transform fireplaces into quiet focal points, with attention to veining alignment and corner details.",
    details: "For living rooms, great rooms, lobbies, and statement spaces.",
  },
  {
    title: "Outdoor kitchens & bars",
    description:
      "Durable, weather‑considered stone selections for outdoor kitchens, BBQ surrounds, and bar tops—fabricated to handle sun, temperature changes, and use over time.",
    details: "Suitable for patios, rooftop decks, and shared amenity spaces.",
  },
  {
    title: "Commercial interiors",
    description:
      "Reception desks, conference tables, restroom vanities, and back‑of‑house surfaces with scheduling and coordination built around real construction timelines.",
    details:
      "Offices, restaurants, hospitality, and multi‑family developments.",
  },
  {
    title: "Custom details & specialty pieces",
    description:
      "Sills, thresholds, shelves, and one‑off elements that tie a project together, fabricated with the same care as large surfaces.",
    details: "Bring us your drawings or concepts for review.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Services
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Stone fabrication and installation for every space.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Quiroz Marble and Granite provides templating, fabrication, and
          installation for kitchens, bathrooms, fireplaces, outdoor living, and
          commercial environments. Each project is handled with precise
          measurement, careful planning, and clean installation.
        </p>
      </div>

      {/* Service grid */}
      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify-between rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6
                       transition-all duration-200 ease-out
                       hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-tight text-[#111827]">
                {service.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-[#4B5563]">
                {service.description}
              </p>
              <p className="text-[11px] text-[#6B7280]">{service.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div
        className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-16 md:flex md:items-center md:justify-between md:px-6
                   transition-all duration-200 ease-out
                   hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to talk through a project?
          </p>
          <p className="text-sm text-[#111827]">
            Share your drawings, inspiration, or basic measurements and we’ll
            prepare a clear, tailored estimate.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
