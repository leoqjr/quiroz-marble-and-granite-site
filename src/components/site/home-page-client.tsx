// src/components/site/home-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomePageClient() {
  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-16 pt-10 md:gap-18 md:px-6 md:pb-24 md:pt-14">
        <HeroSection />
        <HeroSecondary />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
      {/* Left: Text */}
      <div className="space-y-7">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#4B5563]"
        >
          Tailored stone surfaces for modern living.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-balance text-3xl md:text-5xl font-semibold tracking-tight text-[#1D1D1D]"
        >
          Quietly luxurious stone countertops for every room.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="max-w-xl text-base leading-relaxed text-[#4B5563]"
        >
          Quiroz Marble and Granite fabricates and installs granite, marble,
          quartz, and porcelain surfaces with precise, detail-driven
          craftsmanship across the greater Los Angeles area.
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

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
          className="flex flex-wrap gap-6 pt-4 text-[11px] text-[#4B5563]"
        >
          <div className="max-w-xs space-y-1">
            <p className="font-semibold text-[#1D1D1D]">
              Full-service fabrication
            </p>
            <p>Templating, fabrication, and installation managed end-to-end.</p>
          </div>
          <div className="max-w-xs space-y-1">
            <p className="font-semibold text-[#1D1D1D]">
              Residential & commercial
            </p>
            <p>Kitchens, bathrooms, fireplaces, outdoor spaces, and offices.</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Visual card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative h-[260px] overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#F3F2EE] md:h-[340px] lg:h-[360px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#F3F2EE_40%,_#E5DED7_100%)]" />
        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 lg:p-7">
          <div className="flex justify-between text-[11px] text-[#4B5563]">
            <span>Kitchen, Calacatta-style quartz</span>
            <span>Los Angeles, CA</span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#4B5563] backdrop-blur-sm">
              Custom fabrication & installation
            </span>
            <p className="max-w-xs text-[11px] text-[#4B5563]">
              Subtle veining, crisp edges, and aligned seams—crafted for a calm,
              gallery-like kitchen that feels tailored, not generic.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HeroSecondary() {
  return (
    <section className="grid gap-10 md:grid-cols-3">
      <div className="space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
          Who we work with
        </p>
        <h2 className="text-sm font-medium text-[#1D1D1D]">
          For homeowners, designers, and contractors.
        </h2>
        <p className="text-sm leading-relaxed text-[#4B5563]">
          From single vanities to full builds, we handle stone surfaces with the
          same careful, detail-forward approach.
        </p>
      </div>

      <div className="space-y-2 text-sm text-[#4B5563]">
        <p className="font-semibold text-[#1D1D1D]">Homeowners</p>
        <p>
          Guided material choices, clear timelines, and respectful installs in
          lived-in spaces.
        </p>
      </div>

      <div className="space-y-2 text-sm text-[#4B5563]">
        <p className="font-semibold text-[#1D1D1D]">Designers & contractors</p>
        <p>
          Shop drawings, reliable scheduling, and precise fabrication to match
          your specifications.
        </p>
      </div>
    </section>
  );
}
