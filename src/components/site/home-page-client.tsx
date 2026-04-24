// src/components/site/home-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
// import Image from "next/image"; // when you add real images

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
];

export function HomePageClient() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-10 md:gap-12 md:px-6 md:pb-24 md:pt-14">
        <HeroSection />
        <FeaturedProjectSection />
        <HeroSecondary />
        <PortfolioPreviewSection onItemClick={setActiveItem} />
      </main>

      {/* Lightbox overlay */}
      {activeItem && (
        <PortfolioLightbox
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
      {/* Left: Short, clear copy */}
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#4B5563]"
        >
          Stone surfaces for modern homes.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-balance text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1D]"
        >
          Elevated stone fabrication in Los Angeles.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="max-w-md text-base leading-relaxed text-[#4B5563]"
        >
          Quiroz Marble and Granite creates custom stone countertops and
          surfaces in granite, marble, quartz, and porcelain—built for kitchens,
          baths, fireplaces, and outdoor spaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <BookingButton />
          <Link
            href="/portfolio"
            className="text-xs font-medium uppercase tracking-[0.16em] text-[#4B5563] underline underline-offset-4 hover:text-[#1D1D1D]"
          >
            View recent projects
          </Link>
        </motion.div>

        {/* Supporting blurbs: desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
          className="hidden flex-wrap gap-6 pt-1 text-xs text-[#4B5563] md:flex"
        >
          <div className="space-y-1">
            <p className="font-semibold text-[#1D1D1D]">
              Detail-driven installs
            </p>
            <p>From first measure to final seam.</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-[#1D1D1D]">For homes & trade</p>
            <p>Homeowners, designers, and contractors.</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Visual (image placeholder for now) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative h-[260px] overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.08)] md:h-[340px] lg:h-[380px]"
      >
        {/* Image slot – replace with <Image> later */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_40%,_#D3C8BD_100%)]" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 lg:p-7">
          <div className="flex justify-between text-xs text-[#4B5563]">
            <span>Future featured kitchen</span>
            <span>Los Angeles, CA</span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563] backdrop-blur-sm">
              Image placeholder — project hero
            </span>
            <p className="max-w-xs text-xs text-[#4B5563]">
              This block will showcase a hero photo of your work once images are
              ready.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedProjectSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="mt-4 space-y-4"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
          Featured project
        </p>
        <Link
          href="/portfolio"
          className="text-xs font-medium uppercase tracking-[0.16em] text-[#4B5563] underline underline-offset-4 hover:text-[#1D1D1D]"
        >
          View portfolio
        </Link>
      </div>

      <div className="relative h-[240px] overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.08)] md:h-[300px]">
        {/* Replace with <Image> later */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_45%,_#D3C8BD_100%)]" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[#4B5563] backdrop-blur-sm">
          Future project image placeholder
        </div>
      </div>
    </motion.section>
  );
}

function HeroSecondary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="space-y-5"
    >
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
          Who we work with
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#D8CBC3] bg-[#F3F2EE] px-4 py-5 transition-transform transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:border-[#C4B7AA] hover:bg-[#EDE5DC]">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
            Homeowners
          </p>
          <p className="mt-2 text-sm text-[#1D1D1D]">
            Calm, guided projects for lived-in homes.
          </p>
        </div>

        <div className="rounded-2xl border border-[#D8CBC3] bg-[#F3F2EE] px-4 py-5 transition-transform transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:border-[#C4B7AA] hover:bg-[#EDE5DC]">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
            Designers
          </p>
          <p className="mt-2 text-sm text-[#1D1D1D]">
            Clean detailing, aligned with your vision.
          </p>
        </div>

        <div className="rounded-2xl border border-[#D8CBC3] bg-[#F3F2EE] px-4 py-5 transition-transform transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:border-[#C4B7AA] hover:bg-[#EDE5DC]">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
            Contractors
          </p>
          <p className="mt-2 text-sm text-[#1D1D1D]">
            Reliable schedules and precise field execution.
          </p>
        </div>
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
      className="space-y-4"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
          Selected projects
        </p>
        <Link
          href="/portfolio"
          className="text-xs font-medium uppercase tracking-[0.16em] text-[#4B5563] underline underline-offset-4 hover:text-[#1D1D1D]"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {PORTFOLIO_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onItemClick(item)}
            className="group flex flex-col gap-2 text-left"
          >
            <div className="relative h-32 md:h-40 overflow-hidden rounded-2xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_10px_20px_rgba(15,23,42,0.06)] transition-transform duration-200 group-hover:-translate-y-1">
              {/* Replace with <Image> later */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_50%,_#D3C8BD_100%)]" />
            </div>
            <p className="text-xs font-medium text-[#1D1D1D]">
              {item.label} project
            </p>
            <p className="text-xs text-[#4B5563]">
              Image placeholder for a {item.label.toLowerCase()} install.
            </p>
          </button>
        ))}
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-3xl rounded-3xl bg-[#F3F2EE] p-4 shadow-[0_22px_45px_rgba(15,23,42,0.35)] md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-xs uppercase tracking-[0.18em] text-[#4B5563] hover:text-[#1D1D1D]"
        >
          Close
        </button>

        <div className="space-y-4 pt-4 md:pt-2">
          <div className="relative h-60 overflow-hidden rounded-2xl border border-[#D8CBC3] bg-[#E5DED7] md:h-72">
            {/* Replace with <Image> later */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#E5DED7_45%,_#D3C8BD_100%)]" />
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
              {item.label} project
            </p>
            <p className="text-sm text-[#1D1D1D]">{item.description}</p>
            <p className="text-xs text-[#4B5563]">
              This lightbox will show a large project image and concise details
              once photography is ready.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
