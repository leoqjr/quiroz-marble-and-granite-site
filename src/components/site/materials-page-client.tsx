// src/components/site/materials-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type MaterialKey = "granite" | "marble" | "quartz" | "quartzite" | "porcelain";

type Material = {
  key: MaterialKey;
  name: string;
  tagline: string;
  image: string;
  description: string;
  bestFor: string;
  careLevel: "Low" | "Medium" | "Higher";
};

const MATERIALS: Material[] = [
  {
    key: "granite",
    name: "Granite",
    tagline: "Enduring strength with natural character.",
    image: "/materials-granite.jpg",
    description:
      "A classic natural stone with unique movement in every slab, well-suited to busy kitchens and outdoor counters.",
    bestFor: "Family kitchens, BBQ counters, high-traffic surfaces.",
    careLevel: "Medium",
  },
  {
    key: "marble",
    name: "Marble",
    tagline: "Soft veining and a timeless, lived-in patina.",
    image: "/materials-marble.jpg",
    description:
      "Known for its elegant veining and soft feel, marble develops a patina that many clients love over time.",
    bestFor: "Bathrooms, fireplaces, lighter-use kitchens.",
    careLevel: "Higher",
  },
  {
    key: "quartz",
    name: "Quartz",
    tagline: "Quiet, consistent surfaces with low upkeep.",
    image: "/materials-quartz.jpg",
    description:
      "An engineered surface with a consistent look, great for busy spaces that need low-maintenance durability.",
    bestFor: "Family kitchens, rentals, laundry rooms.",
    careLevel: "Low",
  },
  {
    key: "quartzite",
    name: "Quartzite",
    tagline: "Natural stone look with strong performance.",
    image: "/materials-quartzite.jpg",
    description:
      "A hard natural stone that blends the look of marble with strength closer to granite.",
    bestFor: "High-use kitchens needing extra resilience.",
    careLevel: "Medium",
  },
  {
    key: "porcelain",
    name: "Porcelain / sintered",
    tagline: "Thin, modern slabs with high heat resistance.",
    image: "/materials-porcelain.jpg",
    description:
      "Slim profiles and large-format panels with excellent heat and UV resistance for indoor and outdoor use.",
    bestFor: "Outdoor kitchens, modern interiors, wall cladding.",
    careLevel: "Low",
  },
];

export function MaterialsPageClient() {
  const [activeMaterial, setActiveMaterial] = useState<Material | null>(null);

  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto max-w-6xl px-0 pb-16 md:px-0 md:pb-20">
        <HeroSection />
        <div className="px-4 md:px-6 space-y-16 md:space-y-20">
          <PhilosophySection />
          <MaterialFamiliesStrip />
          <MaterialsExplorerSection onOpenMaterial={setActiveMaterial} />
          <ComparisonSection />
          <HowWeReviewMaterialsSection />
          <FinalCTASection />
        </div>
      </main>

      <AnimatePresence>
        {activeMaterial && (
          <MaterialLightbox
            material={activeMaterial}
            onClose={() => setActiveMaterial(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* Hero – slab-focused, full-bleed */

function HeroSection() {
  return (
    <section className="relative h-[340px] md:h-[420px] lg:h-[480px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/materials-hero-slabs.jpg"
          alt="Stacked stone slabs with natural veining"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative h-full"
      >
        <div className="flex h-full items-end px-4 pb-6 md:px-6 md:pb-10">
          <div className="inline-flex max-w-md flex-col gap-3 rounded-2xl bg-black/55 px-4 py-4 text-[#F9F7F2] backdrop-blur-sm md:px-5 md:py-5">
            <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#E5E7EB]">
              Materials
            </p>
            <h1 className="text-lg font-medium tracking-tight md:text-[1.6rem]">
              Discover our curated materials.
            </h1>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-[#E5E7EB]">
              From timeless natural stone to engineered surfaces—each slab tells
              its own story in light, movement, and color.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <BookingButton />
              <a
                href="#explorer"
                className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#E5E7EB] underline underline-offset-4 hover:text-white"
              >
                Browse all materials
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* Philosophy */

function PhilosophySection() {
  return (
    <section className="mx-auto max-w-3xl space-y-3 text-center pt-10 md:pt-12">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
        Our material philosophy
      </p>
      <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
        We personally select every material for beauty, quality, and
        performance. Our role is to help you find the stone that matches your
        vision and the way you actually live.
      </p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
        Samples · Supplier slabs · Honest recommendations
      </p>
    </section>
  );
}

/* Material families strip */

function MaterialFamiliesStrip() {
  return (
    <section className="mt-6 md:mt-8">
      <div className="overflow-x-auto">
        <div className="flex gap-3 border-y border-[#E2E0DA]/70 bg-[#F7F4EE] px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-[#4B5563] md:justify-center">
          {["Granite", "Marble", "Quartz", "Quartzite", "Porcelain"].map(
            (label) => (
              <div
                key={label}
                className="inline-flex items-center rounded-full border border-[#D8CBC3] bg-[#FDFBF6] px-3 py-1"
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* Materials explorer */

function MaterialsExplorerSection({
  onOpenMaterial,
}: {
  onOpenMaterial: (m: Material) => void;
}) {
  return (
    <section id="explorer" className="space-y-4 pt-10 md:pt-12">
      <div className="space-y-2 md:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Materials explorer
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          Browse our core material families the way you would in a showroom:
          large slab imagery first, details on demand.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {MATERIALS.map((material) => (
          <motion.button
            key={material.key}
            type="button"
            onClick={() => onOpenMaterial(material)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] text-left shadow-[0_14px_32px_rgba(15,23,42,0.14)]"
          >
            <div className="relative h-56 w-full md:h-72">
              <Image
                src={material.image}
                alt={material.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-end">
              <div className="w-full px-4 pb-4 md:px-5 md:pb-5">
                <div className="inline-flex flex-col gap-1 rounded-2xl bg-black/55 px-3 py-2 text-[#FDFBF6] backdrop-blur-sm md:px-4 md:py-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#E5E7EB]">
                    {material.name}
                  </p>
                  <p className="text-[12px] md:text-[13px] leading-snug">
                    {material.tagline}
                  </p>
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-[#FDFBF6]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#4B5563] shadow-sm">
                  Explore
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 group-hover:border-[#C5A77B]" />
          </motion.button>
        ))}
      </div>
    </section>
  );
}

/* Lightbox */

function MaterialLightbox({
  material,
  onClose,
}: {
  material: Material;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative flex w-full max-w-4xl flex-col rounded-3xl bg-[#F3F2EE] p-4 shadow-[0_22px_50px_rgba(15,23,42,0.6)] md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#4B5563] hover:text-[#111827]"
        >
          Close
        </button>

        <div className="space-y-4 pt-5 md:pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-[#D8CBC3] bg-[#E5DED7]">
            <div className="relative h-[260px] w-full md:h-[340px]">
              <Image
                src={material.image}
                alt={`${material.name} slab`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              {material.name}
            </p>
            <p className="text-sm font-medium text-[#111827]">
              {material.tagline}
            </p>
            <p className="text-sm text-[#4B5563]">{material.description}</p>
            <div className="mt-2 grid gap-3 text-[12px] text-[#4B5563] md:grid-cols-2">
              <p>
                <span className="font-medium text-[#111827]">Best for:</span>{" "}
                {material.bestFor}
              </p>
              <p>
                <span className="font-medium text-[#111827]">Care level:</span>{" "}
                {material.careLevel}
              </p>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
              Like this material? Share it when you book a free estimate and
              we&apos;ll review options together.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Comparison table */

function ComparisonSection() {
  const rows = [
    {
      label: "Durability",
      granite: "High",
      marble: "Medium",
      quartz: "High",
      quartzite: "Very high",
      porcelain: "High",
    },
    {
      label: "Maintenance",
      granite: "Periodic sealing",
      marble: "More frequent care",
      quartz: "Low, no sealing",
      quartzite: "Similar to granite",
      porcelain: "Low, no sealing",
    },
    {
      label: "Heat resistance",
      granite: "Good",
      marble: "Good",
      quartz: "Avoid direct high heat",
      quartzite: "Very good",
      porcelain: "Excellent",
    },
    {
      label: "Best applications",
      granite: "Kitchens, outdoor",
      marble: "Baths, fireplaces",
      quartz: "Family kitchens, rentals",
      quartzite: "High-use kitchens",
      porcelain: "Outdoor, modern slabs",
    },
    {
      label: "Natural variation",
      granite: "Medium–high",
      marble: "High",
      quartz: "Low",
      quartzite: "Medium–high",
      porcelain: "Printed / controlled",
    },
  ];

  return (
    <section className="space-y-4 pt-10 md:pt-12">
      <div className="space-y-2 md:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Compare at a glance
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          A quick view of how core materials differ. We&apos;ll fill in the
          nuances when we review specific options for your project.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9]">
        <table className="min-w-[640px] w-full border-collapse text-[12px] md:text-[13px]">
          <thead>
            <tr className="border-b border-[#E2E0DA] bg-[#F7F4EE] text-[#4B5563]">
              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.18em]">
                Attribute
              </th>
              {["Granite", "Marble", "Quartz", "Quartzite", "Porcelain"].map(
                (name) => (
                  <th
                    key={name}
                    className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.18em]"
                  >
                    {name}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-[#E2E0DA]/70 text-[#4B5563]"
              >
                <td className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#6B7280]">
                  {row.label}
                </td>
                <td className="px-4 py-3">{row.granite}</td>
                <td className="px-4 py-3">{row.marble}</td>
                <td className="px-4 py-3">{row.quartz}</td>
                <td className="px-4 py-3">{row.quartzite}</td>
                <td className="px-4 py-3">{row.porcelain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* How we review materials with clients */

function HowWeReviewMaterialsSection() {
  return (
    <section className="space-y-6 pt-10 md:pt-12">
      <div className="space-y-2 md:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          How we review materials together
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          We look at materials alongside your cabinets, floors, and lighting so
          you can see how everything works together before we cut a single piece
          of stone.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6 text-[13px] text-[#4B5563]">
        <div className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-4 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Photos & inspiration
          </p>
          <p className="mt-1">
            Bring photos, inspiration, and cabinet or flooring samples.
            We&apos;ll narrow down which materials support your vision.
          </p>
        </div>
        <div className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-4 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Samples & supplier slabs
          </p>
          <p className="mt-1">
            We coordinate sample review and supplier slab visits when needed, so
            you can see the stone at a larger scale.
          </p>
        </div>
        <div className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-4 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Practical guidance
          </p>
          <p className="mt-1">
            We&apos;ll talk through how each surface will age in your kitchen or
            bath, so you can choose with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Final CTA */

function FinalCTASection() {
  return (
    <section className="pt-10 md:pt-14">
      <div
        className="mx-4 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mx-0 md:flex md:items-center md:justify-between md:px-6 md:py-7
                   transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1.5 md:max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to find the perfect stone?
          </p>
          <p className="text-sm text-[#111827]">
            Book a free estimate and we&apos;ll review materials, samples, and
            options tailored to your space, timeline, and budget.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
            Real projects · Clear guidance · Family-owned since 2000
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </section>
  );
}
