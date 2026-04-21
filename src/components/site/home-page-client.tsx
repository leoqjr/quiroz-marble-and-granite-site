// src/components/site/home-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomePageClient() {
  return (
    <div className="bg-[#F8F7F4]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 md:gap-20 md:px-6 md:pb-28 md:pt-16">
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
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7280]"
        >
          Tailored stone surfaces, crafted for modern living.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-balance text-3xl font-medium tracking-tight text-[#111827] md:text-4xl lg:text-[2.8rem]"
        >
          Quietly luxurious stone countertops for kitchens, baths, and beyond.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="max-w-xl text-sm leading-relaxed text-[#4B5563]"
        >
          Quiroz Marble and Granite partners with homeowners, designers, and
          contractors to fabricate and install refined stone surfaces—granite,
          marble, quartz, and porcelain—finished with modern precision and
          meticulous craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <BookingButton />
          <Link
            href="/portfolio"
            className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280] underline underline-offset-4 hover:text-[#111827]"
          >
            View recent projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
          className="flex flex-wrap gap-6 pt-4 text-[11px] text-[#6B7280]"
        >
          <div className="space-y-1">
            <p className="font-semibold text-[#111827]">
              Full-service fabrication
            </p>
            <p>Templating, fabrication, and installation managed end-to-end.</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-[#111827]">
              Residential & commercial
            </p>
            <p>Kitchens, bathrooms, fireplaces, outdoor spaces, and offices.</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative h-[260px] overflow-hidden rounded-3xl border border-[#E2E0DA] bg-[#F3F1EB] md:h-[360px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFFFF_0,_#F3F1EB_45%,_#E5E1D8_100%)]" />
        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
          <div className="flex justify-between text-[11px] text-[#6B7280]">
            <span>Kitchen, Calacatta-style quartz</span>
            <span>Los Angeles, CA</span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#4B5563] backdrop-blur-sm">
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
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Who we work with
        </p>
        <h2 className="text-sm font-medium text-[#111827]">
          Built for homeowners, designers, and contractors.
        </h2>
        <p className="text-[13px] leading-relaxed text-[#4B5563]">
          Whether you are updating a single vanity or managing a full home or
          commercial build, Quiroz Marble and Granite is a detail-forward
          partner from first measure to final install.
        </p>
      </div>

      <div className="space-y-2 text-[13px] text-[#4B5563]">
        <p className="font-semibold text-[#111827]">Homeowners</p>
        <p>
          Guided material selection, clear timelines, and careful protection of
          your home during install—so the process feels as considered as the
          finished space.
        </p>
      </div>

      <div className="space-y-2 text-[13px] text-[#4B5563]">
        <p className="font-semibold text-[#111827]">Designers & contractors</p>
        <p>
          Shop drawings, reliable scheduling, and precise execution tailored to
          your specifications—backed by a fabrication team that understands
          field conditions.
        </p>
      </div>
    </section>
  );
}
