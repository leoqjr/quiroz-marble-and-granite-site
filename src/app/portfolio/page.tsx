// src/app/portfolio/page.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import { useState } from "react";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Fireplace", value: "fireplace" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Commercial", value: "commercial" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all",
  );

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Portfolio
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Selected projects.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          A sample of kitchens, bathrooms, fireplaces, outdoor spaces, and
          commercial interiors completed by Quiroz Marble and Granite. Each
          project is tailored to the space, materials, and people who live or
          work there.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={
                "rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors " +
                (isActive
                  ? "border-[#1F2933] bg-[#1F2933] text-[#F8F7F4]"
                  : "border-[#E2E0DA] bg-white text-[#6B7280] hover:border-[#C5A77B] hover:text-[#111827]")
              }
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Projects grid */}
      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] shadow-sm"
          >
            {/* Image placeholder – later we can use next/image with real photos */}
            <div className="relative h-40 bg-[#F3F1EB] md:h-44">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#F3F1EB_45%,_#E5E1D8_100%)]" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#4B5563] backdrop-blur-sm">
                {project.category}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
              <div className="space-y-1.5">
                <h2 className="text-sm font-semibold tracking-tight text-[#111827]">
                  {project.title}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#6B7280]">
                  {project.location}
                </p>
                <p className="text-[13px] leading-relaxed text-[#4B5563]">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-16 md:flex md:items-center md:justify-between md:px-6">
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            See something you like?
          </p>
          <p className="text-sm text-[#111827]">
            Share a few details about your space and we’ll discuss materials,
            finishes, and a tailored estimate for a similar project.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
