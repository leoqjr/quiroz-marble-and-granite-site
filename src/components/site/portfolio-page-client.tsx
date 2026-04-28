// src/components/site/portfolio-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { SectionHeader } from "@/components/site/section-header";
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

export default function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all",
  );

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-background">
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:space-y-12 md:px-6 md:py-16">
        {/* Intro */}
        <section>
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected projects."
            body="A sample of kitchens, bathrooms, fireplaces, outdoor spaces, and commercial interiors completed by Quiroz Marble and Granite."
          />
        </section>

        {/* Filters */}
        <section>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={
                    "rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] " +
                    "transition-all duration-200 ease-out " +
                    (isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-accent hover:text-foreground hover:-translate-y-0.5 hover:shadow-sm")
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Projects grid */}
        <section>
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Image placeholder – later replace with next/image + real photos */}
                <div className="relative h-60 bg-secondary md:h-64">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#F3F1EB_45%,_#E5E1D8_100%)]" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between px-4 py-3 md:px-5 md:py-3.5">
                  <h2 className="text-sm font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section>
          <div className="mt-8 rounded-2xl border border-border bg-secondary/80 px-5 py-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:mt-10 md:flex md:items-center md:justify-between md:px-6">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                See something you like?
              </p>
              <p className="text-sm text-foreground">
                Share a few details about your space and we’ll discuss
                materials, finishes, and a tailored estimate for a similar
                project.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <BookingButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
