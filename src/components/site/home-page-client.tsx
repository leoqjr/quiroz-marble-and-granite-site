// src/components/site/home-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type PortfolioItem = {
  id: string;
  label: string;
  description: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    description: "Placeholder for a kitchen project image.",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    description: "Placeholder for a bathroom vanity or shower surround.",
  },
  {
    id: "fireplace",
    label: "Fireplace",
    description: "Placeholder for a fireplace surround or feature wall.",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    description: "Placeholder for an outdoor kitchen or bar.",
  },
  {
    id: "island",
    label: "Island",
    description: "Placeholder for a stone kitchen island installation.",
  },
];

// Map each portfolio item id to its image in /public
const IMAGE_MAP: Record<string, string> = {
  kitchen: "/kitchen.jpg",
  bathroom: "/selected-bathroom.jpg",
  fireplace: "/selected-fireplace.jpg",
  outdoor: "/selected-outdoor.jpg",
  island: "/island.jpg",
};

export function HomePageClient() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-18 pt-8 md:gap-12 md:px-6 md:pb-24 md:pt-14">
        {/* Hero */}
        <HeroSection />

        {/* Scroll hint */}
        <div className="flex justify-center pt-2 md:pt-0">
          <div className="flex flex-col items-center text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
            <span>Scroll</span>
            <span className="mt-1 h-6 w-px bg-[#D1D5DB]" />
          </div>
        </div>

        {/* How we work strip */}
        <HowWeWorkStrip />

        {/* Selected / signature projects */}
        <PortfolioPreviewSection onItemClick={setActiveItem} />

        {/* Who we work with / trust strip */}
        <TrustStrip />
      </main>

      {/* Lightbox overlay with animation */}
      <AnimatePresence>
        {activeItem && (
          <PortfolioLightbox
            item={activeItem}
            onClose={() => setActiveItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="space-y-8 md:space-y-0 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-10 pt-2 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-5 md:space-y-6"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Stone fabrication · Los Angeles
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#1D1D1D] sm:text-4xl md:text-[2.6rem]">
          Elevated stone fabrication in Los Angeles.
        </h1>

        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#6B7280]">
          Since 2000 · Family owned
        </p>

        <p className="max-w-md md:max-w-lg text-sm md:text-[0.95rem] leading-relaxed text-[#4B5563]">
          Custom countertops and stone surfaces in granite, marble, quartz, and
          porcelain for kitchens, bathrooms, fireplaces, and outdoor spaces.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <BookingButton />
          <Link
            href="/portfolio"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563] underline underline-offset-4 hover:text-[#1D1D1D]"
          >
            View our work
          </Link>
        </div>
      </motion.div>

      {/* Image hero card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="relative overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.10)]"
      >
        <div
          aria-hidden="true"
          className="aspect-[3/4] w-full bg-cover bg-center md:aspect-[4/5]"
          style={{
            backgroundImage: "url('/selected-kitchen.jpg')",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
      </motion.div>
    </section>
  );
}

function HowWeWorkStrip() {
  return (
    <section className="border-y border-[#E3D9CE]/70 py-6 md:py-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <p className="text-[11px] md:text-sm font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          How we work
        </p>
        <div className="grid gap-3 md:grid-cols-3 md:gap-6 text-sm md:text-[0.95rem] text-[#4B5563]">
          <div className="space-y-1 md:border-r md:border-[#E3D9CE]/70 md:pr-4 last:md:border-r-0">
            <p>Templates, fabrication, and installation handled by one team.</p>
          </div>
          <div className="space-y-1 md:border-r md:border-[#E3D9CE]/70 md:px-4 last:md:border-r-0">
            <p>
              Clear dates and communication from first measure to final install.
            </p>
          </div>
          <div className="space-y-1 md:pl-4">
            <p>Careful seams, edges, and site protection on every project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="flex flex-col gap-5 rounded-3xl border border-[#E3D9CE] bg-[#F8F5F0] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6 md:py-6"
    >
      <div className="space-y-2 md:max-w-xl">
        <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Who we work with
        </p>
        <p className="text-sm md:text-[0.95rem] text-[#374151]">
          We keep stone projects calm for homeowners, designers, and contractors
          who want clear dates and a tidy install.
        </p>
      </div>

      <div className="grid w-full gap-2 md:w-auto md:grid-cols-3 md:gap-3">
        {[
          {
            label: "Homeowners",
            copy: "Guidance on materials, layout, and timing.",
          },
          {
            label: "Designers",
            copy: "Clean details that match your vision.",
          },
          {
            label: "Contractors",
            copy: "Reliable templates and installs on schedule.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 rounded-2xl border border-[#D8CBC3] bg-[#F9F6F1] px-3 py-2 text-left"
          >
            <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
              {item.label}
            </span>
            <span className="text-[11px] md:text-xs text-[#6B7280] leading-snug">
              {item.copy}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function PortfolioPreviewSection({
  onItemClick,
}: {
  onItemClick: (item: PortfolioItem) => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="space-y-4"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
          Signature work
        </p>
        <Link
          href="/portfolio"
          className="text-xs md:text-[13px] font-medium uppercase tracking-[0.16em] text-[#4B5563] underline underline-offset-4 hover:text-[#1D1D1D]"
        >
          View portfolio
        </Link>
      </div>

      {/* Asymmetric grid: kitchen hero, regular tiles, wide island */}
      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[220px] lg:auto-rows-[260px]">
        {PORTFOLIO_ITEMS.map((item) => {
          const imgSrc = IMAGE_MAP[item.id];

          const bgPosition =
            item.id === "bathroom"
              ? "center 70%"
              : item.id === "fireplace"
                ? "center 30%"
                : item.id === "island"
                  ? "center 50%"
                  : "center";

          const isKitchen = item.id === "kitchen";
          const isIsland = item.id === "island";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onItemClick(item)}
              className={cn(
                "group flex flex-col gap-2 text-left",
                // Big hero tile for kitchen
                isKitchen && "md:col-span-2 md:row-span-2",
                // Island: wide tile on desktop, same row height as others
                isIsland && "hidden md:flex md:col-span-2",
              )}
            >
              <div className="relative h-40 md:h-full overflow-hidden rounded-2xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_10px_20px_rgba(15,23,42,0.06)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
                {imgSrc ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${imgSrc}')`,
                      backgroundPosition: bgPosition,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_50%,_#D3C8BD_100%)]" />
                )}
                {/* Soft gradient overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="text-xs md:text-[13px] font-medium text-[#1D1D1D]">
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </motion.section>
  );
}

function PortfolioLightbox({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) {
  const imgSrc = IMAGE_MAP[item.id];

  const bgPosition =
    item.id === "bathroom"
      ? "center 65%"
      : item.id === "fireplace"
        ? "center 30%"
        : "center";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex w-full max-w-4xl flex-col rounded-3xl bg-[#F3F2EE] p-4 shadow-[0_22px_45px_rgba(15,23,42,0.35)] md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#4B5563] hover:text-[#1D1D1D]"
        >
          Close
        </button>

        <div className="space-y-4 pt-6 md:pt-4">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-[#D8CBC3] bg-[#E5DED7] md:h-[520px]">
            {imgSrc ? (
              <div
                className="absolute inset-0 bg-cover"
                style={{
                  backgroundImage: `url('${imgSrc}')`,
                  backgroundPosition: bgPosition,
                }}
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_45%,_#D3C8BD_100%)]" />
            )}
          </div>
          <div className="space-y-1">
            <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
              {item.label}
            </p>
            <p className="text-sm md:text-[0.95rem] text-[#1D1D1D]">
              {item.description}
            </p>
            <p className="text-xs md:text-[13px] text-[#4B5563]">
              This lightbox will show a large project image and concise details
              once photography is ready.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
