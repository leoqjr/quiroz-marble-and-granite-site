// src/components/site/about-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { SectionHeader } from "@/components/site/section-header";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
};

export function AboutPageClient() {
  return (
    <div className="bg-background">
      <main className="mx-auto max-w-6xl pb-16 md:pb-20">
        <HeroSection />
        <div className="space-y-10 px-4 pt-10 md:space-y-16 md:px-6 md:pt-14">
          <StorySection />
          <ValuesSection />
          <CraftsmanshipSection />
          <WhyChooseSection />
          <FinalCTASection />
        </div>
      </main>
    </div>
  );
}

/* Hero – warm and human */

/* Hero – clean, text-only */

function HeroSection() {
  return (
    <section className="border-b border-border/70 bg-card">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        {/* Text */}
        <div className="space-y-4 md:space-y-5">
          <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            About
          </p>
          <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground md:text-[2.4rem]">
            A family stone shop in Los Angeles.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            Quiroz Marble and Granite is a family‑run fabrication shop focused
            on calm, careful stonework for everyday spaces.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <BookingButton />
            <a
              href="#story"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Learn our story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Our Story – narrative, condensed */

function StorySection() {
  return (
    <motion.section
      id="story"
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl space-y-4"
    >
      <SectionHeader
        align="center"
        eyebrow="Our story"
        body={
          <>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Quiroz Marble and Granite began in 2000 as a small, family-run
              shop serving the greater Los Angeles area. We&apos;ve grown with
              our clients while keeping the same focus on careful, one-at-a-time
              stone work.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              We believe stone should feel like it has always belonged in the
              room—quiet seams, thoughtful veining, and surfaces that support
              how you actually cook, gather, and live.
            </p>
          </>
        }
        kicker="Family-owned · Since 2000 · Los Angeles"
      />
    </motion.section>
  );
}

/* Values – Craft, Clarity, Care */

function ValuesSection() {
  const values = [
    {
      label: "Craft",
      body: "Edges, seams, and layouts are treated as design decisions, not afterthoughts.",
    },
    {
      label: "Clarity",
      body: "Straightforward estimates, clear timelines, and a single team you can reach.",
    },
    {
      label: "Care",
      body: "Respect for homes and job sites—protection, dust control, and clean installs.",
    },
  ];

  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className="space-y-6"
    >
      <SectionHeader
        eyebrow="What guides our work"
        body="Three simple principles shape every project in our shop and on site."
      />

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {values.map((value) => (
          <motion.div
            key={value.label}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
          >
            <div className="inline-flex items-center gap-2">
              {/* Use accent (blue-gray) as a subtle brand dot */}
              <div className="h-6 w-6 rounded-full border border-accent/60 bg-secondary" />
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {value.label}
              </p>
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {value.body}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* Family craftsmanship – condensed */

function CraftsmanshipSection() {
  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="space-y-6 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-10 md:space-y-0"
    >
      <div className="space-y-3 md:space-y-4">
        <SectionHeader
          eyebrow="The Quiroz approach to stone"
          body={
            <>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                Every project starts with how you use the space. We look at
                materials, veining, and edge profiles that make sense for your
                home and the way you live.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                In the shop, we plan seams and movement on full slabs—not just
                on paper—and check each surface under good light before it
                leaves.
              </p>
            </>
          }
        />
      </div>

      <div className="mt-2 md:mt-0">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary shadow-[0_18px_35px_rgba(15,23,42,0.2)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/about-us-craftsmanship.jpg"
              alt="Hands working on a stone edge in the Quiroz shop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-3">
            <span className="inline-flex rounded-full bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-card backdrop-blur-[3px] md:text-[11px]">
              In-house fabrication · Los Angeles
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* Why choose us – tightened */

function WhyChooseSection() {
  const items = [
    "Family owned and operated since 2000.",
    "In-house fabrication in Los Angeles.",
    "Clear dates and reliable communication.",
    "Stone projects that feel settled and timeless.",
  ];

  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="space-y-6"
    >
      <SectionHeader
        eyebrow="Why people work with us"
        body="We work with homeowners, designers, and contractors who want calm, reliable stone projects."
      />

      <div className="grid gap-2 md:grid-cols-2 md:gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground"
          >
            {/* Accent dot picks up the blue-gray accent color */}
            <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-accent" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* Final CTA – short and consistent, aligned on mobile */

function FinalCTASection() {
  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
      className="pt-6 md:pt-8"
    >
      <div className="rounded-2xl border border-border bg-secondary/80 px-4 py-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:flex md:items-center md:justify-between md:px-6 md:py-7">
        <div className="space-y-1 md:max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Ready to start?
          </p>
          <p className="text-sm text-foreground">
            Tell us about your project and we&apos;ll help you plan the stone.
          </p>
        </div>
        <div className="mt-4 w-full md:mt-0 md:w-auto md:text-right">
          <div className="inline-block w-full md:w-auto">
            <BookingButton />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
