// src/components/site/portfolio-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

          {/* Projects grid */}
          <section id="projects">
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

/* Hero – same layout pattern as About, but with marble background */

function HeroSection() {
  return (
    <section className="relative h-[340px] overflow-hidden md:h-[420px] lg:h-[460px]">
      <motion.div
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/background-image1.jpg"
          alt="Marble backdrop for portfolio projects"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative h-full"
      >
        <div className="flex h-full items-end px-4 pb-6 md:px-6 md:pb-10">
          <div className="inline-flex max-w-md flex-col gap-3 rounded-2xl bg-black/60 px-4 py-4 text-card backdrop-blur-sm md:max-w-lg md:px-5 md:py-5">
            <h1 className="font-heading text-lg font-medium tracking-tight md:text-[1.6rem]">
              Selected stone projects in Los Angeles.
            </h1>
            <p className="text-[12px] leading-relaxed text-muted/80 md:text-[13px]">
              Kitchens, bathrooms, fireplaces, outdoor spaces, and commercial
              interiors—each project tailored to the home, the client, and the
              way the space is used.
            </p>
            <div className="mt-1 flex flex-row flex-wrap items-center gap-3">
              <BookingButton />
              <Link
                href="/services"
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted/80 underline underline-offset-4 hover:text-card md:text-[11px]"
              >
                View our services
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
