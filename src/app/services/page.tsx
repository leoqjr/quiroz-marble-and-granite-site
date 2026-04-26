// src/app/services/page.tsx
import { BookingButton } from "@/components/site/booking-button";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stone Fabrication Services in Los Angeles",
  description:
    "Explore stone fabrication services from Quiroz Marble and Granite, including kitchen countertops, bathroom vanities, fireplaces, outdoor kitchens, commercial interiors, and custom stone details in the greater Los Angeles area.",
};

const services = [
  {
    title: "Kitchen countertops",
    subtitle: "Islands, backsplashes, and full runs.",
    note: "Granite, marble, quartz, and porcelain.",
  },
  {
    title: "Bathrooms & vanities",
    subtitle: "Vanity tops, surrounds, and ledges.",
    note: "Primary suites, guest baths, and powder rooms.",
  },
  {
    title: "Fireplaces & feature walls",
    subtitle: "Surrounds, mantels, and slab walls.",
    note: "Aligned veining and quiet focal points.",
  },
  {
    title: "Outdoor kitchens & bars",
    subtitle: "BBQ counters, bar tops, and prep space.",
    note: "Weather‑considered stone for outdoor use.",
  },
  {
    title: "Commercial interiors",
    subtitle: "Reception, meeting, and back‑of‑house.",
    note: "Offices, hospitality, and multi‑unit work.",
  },
  {
    title: "Custom details",
    subtitle: "Sills, thresholds, shelves, and one‑offs.",
    note: "Bring drawings or concepts for review.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-3 md:space-y-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Services
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Stone, tailored to the way you live.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563]">
          Templating, fabrication, and installation for kitchens, baths,
          fireplaces, outdoor spaces, and commercial interiors—handled start to
          finish by one team.
        </p>
      </div>

      {/* Main layout: services + image */}
      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
        {/* Service grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6
                         transition-all duration-200 ease-out
                         hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="space-y-3">
                <h2 className="text-[15px] md:text-[16px] font-semibold tracking-tight text-[#111827]">
                  {service.title}
                </h2>
                <p className="text-[14px] md:text-[15px] text-[#4B5563]">
                  {service.subtitle}
                </p>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image card */}
        <div className="mt-2 md:mt-0">
          <div className="relative overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.10)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/services-kitchen.jpg" // or your chosen image
                alt="Stone countertop installation detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4">
              <span className="inline-flex rounded-full bg-black/55 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.22em] text-[#F9F7F2] backdrop-blur-[3px]">
                Selected work · Los Angeles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div
        className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-14 md:flex md:items-center md:justify-between md:px-6
                   transition-all duration-200 ease-out
                   hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1.5">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Share a project, get a clear scope.
          </p>
          <p className="text-sm text-[#111827]">
            Send drawings, inspiration, or basic measurements and we’ll respond
            with options, timing, and a straightforward estimate.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
