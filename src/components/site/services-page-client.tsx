// src/components/site/services-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { SectionHeader } from "@/components/site/section-header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    key: "kitchen",
    title: "Kitchen countertops",
    subtitle: "Islands, backsplashes, and full runs.",
    note: "Granite, marble, quartz, and porcelain.",
    image: "/services-kitchen-hero.jpg",
  },
  {
    key: "bathroom",
    title: "Bathroom vanities & surfaces",
    subtitle: "Vanity tops, surrounds, and ledges.",
    note: "Primary suites, guest baths, and powder rooms.",
    image: "/services-bathroom-hero.jpg",
  },
  {
    key: "fireplace",
    title: "Fireplaces & feature walls",
    subtitle: "Surrounds, mantels, and slab walls.",
    note: "Aligned veining and quiet focal points.",
    image: "/services-fireplace-hero.jpg",
  },
  {
    key: "outdoor",
    title: "Outdoor kitchens & bars",
    subtitle: "BBQ counters, bar tops, and prep space.",
    note: "Weather‑considered stone for outdoor use.",
    image: "/services-outdoor-hero.jpg",
  },
  {
    key: "commercial",
    title: "Commercial interiors",
    subtitle: "Reception, meeting, and back‑of‑house.",
    note: "Offices, hospitality, and multi‑unit work.",
    image: "/services-commercial-hero.jpg",
  },
  {
    key: "custom",
    title: "Custom fabrication",
    subtitle: "Sills, thresholds, shelves, and one‑offs.",
    note: "Bring drawings or concepts for review.",
    image: "/services-detail-hero.jpg",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultation & measurement",
    body: "We review your plans or space and schedule on-site measurements where needed.",
  },
  {
    step: 2,
    title: "Material & layout",
    body: "We align on stone type, color, edges, and seam layout so the surfaces feel calm.",
  },
  {
    step: 3,
    title: "Fabrication",
    body: "Templates are translated into clean cuts, edges, and seams in our shop.",
  },
  {
    step: 4,
    title: "Installation",
    body: "Our team installs, protects surrounding finishes, and coordinates with other trades.",
  },
  {
    step: 5,
    title: "Walkthrough & care",
    body: "We walk the space with you and review care so the stone wears well over time.",
  },
];

export function ServicesPageClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  return (
    <div className="bg-background">
      <main className="mx-auto max-w-6xl pb-16 md:pb-20">
        <HeroSection />

        <div className="space-y-14 px-4 pt-10 md:space-y-18 md:px-6 md:pt-14">
          <ExpertiseSection />
          <ServicesOverviewSection
            onOpenImage={(src, alt) => {
              setLightboxImage(src);
              setLightboxAlt(alt);
            }}
          />
          <ProcessSection />
          <WhoWeServeSection />
          <FinalCTASection />
        </div>
      </main>

      {/* Lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt={lightboxAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-card"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Hero – stronger heading + stacked service imagery */

/* Hero – stronger heading, stacked imagery only on md+ */

function HeroSection() {
  return (
    <section className="border-b border-border/70 bg-card">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        {/* Text */}
        <div className="space-y-4 md:space-y-5">
          <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Services
          </p>
          <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground md:text-[2.4rem]">
            Stone surfaces for everyday living.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            Kitchens, baths, fireplaces, and outdoor work handled by one team,
            from template to install.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <BookingButton />
            <Link
              href="/portfolio"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="mx-auto max-w-3xl pt-2 md:pt-4">
      <SectionHeader
        align="center"
        eyebrow="Our expertise"
        body="Quiroz Marble and Granite is a family-run shop serving the greater Los Angeles area with full-service stone work—measurements, shop work, and installation handled under one roof."
      />
    </section>
  );
}

/* Services overview – simplified, clean grid */

function ServicesOverviewSection({
  onOpenImage,
}: {
  onOpenImage: (src: string, alt: string) => void;
}) {
  return (
    <section className="space-y-8 md:space-y-9">
      <SectionHeader
        eyebrow="What we handle"
        body="Kitchens, baths, fireplaces, outdoor spaces, commercial interiors, and custom details—fabricated and installed by one team that focuses on calm, clean stonework."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {services.map((service) => (
          <article
            key={service.key}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => onOpenImage(service.image, service.title)}
              className="relative h-44 w-full cursor-zoom-in overflow-hidden md:h-52"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-3">
                <span className="inline-flex rounded-full bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-card backdrop-blur-[3px] md:text-[11px]">
                  {service.key}
                </span>
              </div>
            </button>

            <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
              <div className="space-y-1.5">
                <h2 className="text-[15px] font-semibold tracking-tight text-foreground md:text-[16px]">
                  {service.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
                  {service.subtitle}
                </p>
                <p className="text-[12px] text-muted-foreground md:text-[13px]">
                  {service.note}
                </p>
              </div>
              <div className="mt-3">
                <Link
                  href="/portfolio"
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  See examples
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="space-y-7 md:space-y-8">
      <SectionHeader
        eyebrow="Our process"
        body="A simple five-step process that keeps stone projects organized from first conversation to final walkthrough."
      />

      {/* Desktop timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-accent/40" />
          <div className="relative grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col items-start gap-3 rounded-2xl bg-card p-4 shadow-sm"
              >
                <div className="inline-flex items-center justify-center rounded-full border border-accent bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Step {step.step}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stacked steps */}
      <div className="space-y-3 md:hidden">
        {processSteps.map((step) => (
          <div
            key={step.step}
            className="flex flex-col gap-2 rounded-2xl bg-card p-4 shadow-sm"
          >
            <div className="inline-flex items-center justify-center rounded-full border border-accent bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Step {step.step}
            </div>
            <p className="text-sm font-semibold text-foreground">
              {step.title}
            </p>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeServeSection() {
  const audiences = [
    {
      label: "Homeowners",
      body: "Guidance on materials, layouts, and timing, with clean installs and respect for your home.",
    },
    {
      label: "Interior designers & architects",
      body: "Stone execution that supports your design intent—seams, veining, and details that read as one surface.",
    },
    {
      label: "Contractors & builders",
      body: "Reliable scheduling, clear communication, and one team handling templates through installation.",
    },
  ];

  return (
    <section className="space-y-7 md:space-y-8">
      <SectionHeader
        eyebrow="Who we serve"
        body="We work directly with homeowners, alongside designers and architects, and as a trusted partner to contractors and builders."
      />

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {audiences.map((audience) => (
          <div
            key={audience.label}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {audience.label}
            </p>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {audience.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="mt-2 md:mt-4">
      <div className="rounded-2xl border border-border bg-secondary/80 px-5 py-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:flex md:items-center md:justify-between md:px-6 md:py-7">
        <div className="space-y-1.5 md:max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Ready to start?
          </p>
          <p className="text-sm text-foreground">
            Share a few details about your project and we&apos;ll follow up with
            timing, next steps, and a clear path forward.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </section>
  );
}
