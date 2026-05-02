// src/components/site/portfolio-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import Link from "next/link";
import { useMemo, useState } from "react";

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

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  // For a bit of hierarchy: treat the first few as "featured" on desktop
  const [featured, ...rest] = filteredProjects;

  return (
    <div className="bg-background">
      <main className="mx-auto max-w-6xl pb-16 md:pb-20">
        <HeroSection />

        <div className="space-y-10 px-4 pt-10 md:space-y-16 md:px-6 md:pt-14">
          {/* Filters */}
          <section>
            <div className="mt-2 flex flex-wrap gap-2 md:mt-0">
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

          {/* Featured row (desktop) + grid */}
          <section id="projects" className="space-y-8">
            {featured && (
              <div className="hidden gap-6 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-stretch">
                {/* Featured large card */}
                <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
                  <div className="relative h-64 bg-secondary">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff_0,_#f5f5f2_45%,_#e6e6e0_100%)]" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                      Featured · {featured.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-5 py-4">
                    <div className="space-y-1.5">
                      <h2 className="text-[15px] font-semibold tracking-tight text-foreground md:text-[16px]">
                        {featured.title}
                      </h2>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {featured.location}
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link
                        href="/services"
                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
                      >
                        View similar work
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Two supporting cards */}
                <div className="flex flex-col gap-6">
                  {rest.slice(0, 2).map((project) => (
                    <article
                      key={project.id}
                      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative h-32 bg-secondary">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff_0,_#f5f5f2_45%,_#e6e6e0_100%)]" />
                        <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                          {project.category}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between px-4 py-3">
                        <h3 className="text-sm font-semibold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          {project.location}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Grid – includes all projects, but on desktop this will follow the featured row */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative h-60 bg-secondary md:h-64">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff_0,_#f5f5f2_45%,_#e6e6e0_100%)]" />
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
                  Share a few details about your space and we&apos;ll discuss
                  materials, finishes, and a tailored estimate for a similar
                  project.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <BookingButton />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* Hero – same layout pattern as About/Services, marble background */

/* Hero – stronger heading, consistent with Services */

/* Hero – stronger heading, with blue accents */

/* Hero – stronger heading, with blue accent and no side box */

function HeroSection() {
  return (
    <section className="border-b border-border/70 bg-card">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        {/* Text */}
        <div className="space-y-4 md:space-y-5">
          <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Portfolio
          </p>
          <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground md:text-[2.4rem]">
            Selected stone projects in Los Angeles.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            Kitchens, baths, fireplaces, outdoor spaces, and commercial work
            tailored to each home and client.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <BookingButton />
            <Link
              href="/services"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              View our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
