// src/components/site/services-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { SectionHeader } from "@/components/site/section-header";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    key: "kitchen",
    title: "Kitchen countertops",
    subtitle: "Islands, backsplashes, and full runs.",
    note: "Granite, marble, quartz, and porcelain.",
    image: "/services-kitchen.jpg",
  },
  {
    key: "bathroom",
    title: "Bathroom vanities & surfaces",
    subtitle: "Vanity tops, surrounds, and ledges.",
    note: "Primary suites, guest baths, and powder rooms.",
    image: "/services-bathroom.jpg",
  },
  {
    key: "fireplace",
    title: "Fireplaces & feature walls",
    subtitle: "Surrounds, mantels, and slab walls.",
    note: "Aligned veining and quiet focal points.",
    image: "/services-fireplace.jpg",
  },
  {
    key: "outdoor",
    title: "Outdoor kitchens & bars",
    subtitle: "BBQ counters, bar tops, and prep space.",
    note: "Weather‑considered stone for outdoor use.",
    image: "/services-outdoor.jpg",
  },
  {
    key: "commercial",
    title: "Commercial interiors",
    subtitle: "Reception, meeting, and back‑of‑house.",
    note: "Offices, hospitality, and multi‑unit work.",
    image: "/services-commercial.jpg",
  },
  {
    key: "custom",
    title: "Custom fabrication",
    subtitle: "Sills, thresholds, shelves, and one‑offs.",
    note: "Bring drawings or concepts for review.",
    image: "/services-detail.jpg",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultation & measurement",
    body: "We review your plans or space, discuss how you use the area, and schedule on-site measurements where needed.",
  },
  {
    step: 2,
    title: "Material selection & design",
    body: "We align on stone type, color, edge profiles, and veining layouts so the surfaces feel calm and intentional.",
  },
  {
    step: 3,
    title: "Precision fabrication",
    body: "Templates are translated into clean cuts, edges, and seams in our fabrication shop, with veining and joints carefully considered.",
  },
  {
    step: 4,
    title: "Professional installation",
    body: "Our team installs, protects surrounding finishes, and coordinates with other trades on site to keep the day organized.",
  },
  {
    step: 5,
    title: "Final walkthrough & care",
    body: "We walk the space with you, confirm details, and review care and maintenance so the stone wears well over time.",
  },
];

export function ServicesPageClient() {
  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20 space-y-16 md:space-y-20">
        <HeroSection />
        <ExpertiseSection />
        <ServicesGridSection />
        <ProcessSection />
        <WhoWeServeSection />
        <FinalCTASection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-10">
      {/* Text */}
      <div className="space-y-4 md:space-y-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Services
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Precision stone surfaces, tailored to you.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          Stone, tailored to the way you live. Templating, fabrication, and
          installation—handled start to finish by one dedicated team.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <BookingButton />
          <Link
            href="/materials"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563] underline underline-offset-4 hover:text-[#111827]"
          >
            Explore our materials
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0">
        <div className="relative overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.10)]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/services-kitchen.jpg"
              alt="Stone kitchen installation by Quiroz Marble and Granite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4">
            <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.22em] text-[#F9F7F2] backdrop-blur-[3px]">
              In‑house fabrication · Los Angeles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="mx-auto max-w-3xl">
      <SectionHeader
        align="center"
        eyebrow="Our expertise"
        body="Quiroz Marble and Granite is a family-run shop serving the greater Los Angeles area with full-service stone work—from first measurements to final walkthrough. We manage templating, fabrication, and installation under one roof so details stay consistent throughout the project."
        kicker="25+ years · Family-owned · Greater Los Angeles"
      />
    </section>
  );
}

function ServicesGridSection() {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Our services"
        body="Kitchens, baths, fireplaces, outdoor spaces, and custom details fabricated and installed by one team that focuses on calm, clean stonework."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.key}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] shadow-sm
                       transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-[#C5A77B]"
          >
            <div className="relative h-40 w-full md:h-44">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
              <div className="space-y-2">
                <h2 className="text-[15px] md:text-[16px] font-semibold tracking-tight text-[#111827]">
                  {service.title}
                </h2>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#4B5563]">
                  {service.subtitle}
                </p>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">
                  {service.note}
                </p>
              </div>
              <div className="mt-3">
                <Link
                  href="/portfolio"
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563] underline underline-offset-4 hover:text-[#111827]"
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
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Our process"
        body="A calm, five-step process that keeps stone projects organized from first conversation to final walkthrough."
      />

      {/* Desktop timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-[#C5A77B]/40" />
          <div className="relative grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col items-start gap-3 rounded-2xl bg-[#FDFCF9] p-4 shadow-sm"
              >
                <div className="inline-flex items-center justify-center rounded-full border border-[#C5A77B] bg-[#F8F5F0] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  Step {step.step}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#111827]">
                    {step.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#4B5563]">
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
            className="flex flex-col gap-2 rounded-2xl bg-[#FDFCF9] p-4 shadow-sm"
          >
            <div className="inline-flex items-center justify-center rounded-full border border-[#C5A77B] bg-[#F8F5F0] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Step {step.step}
            </div>
            <p className="text-sm font-semibold text-[#111827]">{step.title}</p>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
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
      body: "Guidance on materials, layouts, and timing, with a focus on clean installs and respect for your home.",
    },
    {
      label: "Interior designers & architects",
      body: "Stone execution that supports your design intent—seam placement, veining, and details that read as one continuous surface.",
    },
    {
      label: "Contractors & builders",
      body: "Reliable scheduling, clear communication, and a single team handling templates through installation.",
    },
  ];

  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Who we serve"
        body="We work directly with homeowners, alongside designers and architects, and as a trusted partner to contractors and builders."
      />

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {audiences.map((audience) => (
          <div
            key={audience.label}
            className="flex flex-col gap-2 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-4 py-4 shadow-sm"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
              {audience.label}
            </p>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
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
    <section className="mt-4">
      <div
        className="rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:flex md:items-center md:justify-between md:px-6 md:py-7
                   transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1.5 md:max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to transform your space?
          </p>
          <p className="text-sm text-[#111827]">
            Book a free estimate to review your project, materials, and timing
            with a family-run team that&apos;s been working with stone since
            2000.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
            No obligation · Clear timeline · Family-owned since 2000
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </section>
  );
}
