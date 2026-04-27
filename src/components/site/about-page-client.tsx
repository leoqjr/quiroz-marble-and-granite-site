// src/components/site/about-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
};

export function AboutPageClient() {
  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto max-w-6xl pb-16 md:pb-20">
        <HeroSection />
        <div className="px-4 md:px-6 space-y-16 md:space-y-20">
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

function HeroSection() {
  return (
    <section className="relative h-[340px] md:h-[420px] lg:h-[460px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/about-hero.jpg" // replace with workshop/family/process image you have
          alt="Stone fabrication in progress at Quiroz Marble and Granite"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative h-full"
      >
        <div className="flex h-full items-end px-4 pb-6 md:px-6 md:pb-10">
          <div className="inline-flex max-w-md flex-col gap-3 rounded-2xl bg-black/55 px-4 py-4 text-[#F9F7F2] backdrop-blur-sm md:max-w-lg md:px-5 md:py-5">
            <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#E5E7EB]">
              About Quiroz Marble and Granite
            </p>
            <h1 className="text-lg font-medium tracking-tight md:text-[1.6rem]">
              A family tradition since 2000.
            </h1>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-[#E5E7EB]">
              Crafted with care in Los Angeles. From our family to yours.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <BookingButton />
              <a
                href="#story"
                className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#E5E7EB] underline underline-offset-4 hover:text-white"
              >
                Learn our story
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* Our Story – narrative */

function StorySection() {
  return (
    <motion.section
      id="story"
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl space-y-4 pt-10 md:pt-12 text-center md:text-left"
    >
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="h-px w-12 bg-[#C5A77B]" />
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Our story
        </p>
      </div>
      <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
        Quiroz Marble and Granite began in 2000 as a small, family-run shop
        serving the greater Los Angeles area. Over the years, we’ve grown with
        our clients—working in homes, condos, and projects across the city—while
        keeping the same focus on careful, one-at-a-time stone work.
      </p>
      <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
        We believe stone should feel like it has always belonged in the room.
        That means quiet seams, thoughtful veining layouts, and surfaces that
        support how you actually cook, gather, and live—not just how a photo
        looks on installation day.
      </p>
      <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
        From first measure to final walkthrough, templating, fabrication, and
        installation are handled by one dedicated team. You’ll see the same
        names and faces as your project moves from plans to finished stone.
      </p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
        Family-owned · Since 2000 · Los Angeles
      </p>
    </motion.section>
  );
}

/* Values – Craft, Clarity, Care */

function ValuesSection() {
  const values = [
    {
      label: "Craft",
      body: "Edges, seams, and layouts are treated as design decisions. We think about how veining moves, how light hits the surface, and how each detail feels in the hand.",
    },
    {
      label: "Clarity",
      body: "Honest timelines, clear communication, and straightforward estimates. You always know what’s happening next, and who will be on site.",
    },
    {
      label: "Care",
      body: "Respect for homes and job sites—protection, dust control, and clean, tidy installs. We leave spaces as we’d want our own homes left.",
    },
  ];

  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className="space-y-5"
    >
      <div className="space-y-2 md:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          What guides our work
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          Three simple principles shape every project in our shop and on site.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {values.map((value) => (
          <motion.div
            key={value.label}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="flex flex-col gap-2 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-4 py-4 shadow-sm"
          >
            <div className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border border-[#C5A77B]/60 bg-[#F8F5F0]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
                {value.label}
              </p>
            </div>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
              {value.body}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* Family craftsmanship */

function CraftsmanshipSection() {
  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-10 space-y-6 md:space-y-0"
    >
      <div className="space-y-3 md:space-y-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          The Quiroz approach to stone
        </p>
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          Every project starts with a conversation about how you use the space.
          From there, we look at materials, veining, and edge profiles that make
          sense for your home and the way you cook, gather, and live.
        </p>
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          In the shop, we plan seam placement, veining movement, and joints on
          full-sized slabs—not just on paper. Edges are shaped and finished by
          hand, and we check each surface under good light before it leaves.
        </p>
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          On site, our team protects floors and finishes, keeps dust under
          control, and leaves your space tidy. The goal is a calm install and a
          finished project that feels settled from day one.
        </p>
      </div>

      <div className="mt-2 md:mt-0">
        <div className="relative overflow-hidden rounded-3xl border border-[#D8CBC3] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.18)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/about-craft.jpg"
              alt="Hands working on a stone edge in the Quiroz shop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-3">
            <span className="inline-flex rounded-full bg-black/55 px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#F9F7F2] backdrop-blur-[3px]">
              In-house fabrication · Los Angeles
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* Why choose us */

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
      className="space-y-4"
    >
      <div className="space-y-2 md:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Why families and professionals choose us
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          We work directly with homeowners, alongside designers, and as a
          trusted trade partner for contractors—keeping stone projects calm from
          first measure to final install.
        </p>
      </div>

      <div className="grid gap-2 md:grid-cols-2 md:gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-[13px] leading-relaxed text-[#4B5563]"
          >
            <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#C5A77B]" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* Final CTA */

function FinalCTASection() {
  return (
    <motion.section
      {...fadeUp}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
      className="pt-4 md:pt-6"
    >
      <div
        className="mx-4 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mx-0 md:flex md:items-center md:justify-between md:px-6 md:py-7
                   transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1.5 md:max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to bring your vision to life?
          </p>
          <p className="text-sm text-[#111827]">
            Share your project and we&apos;ll walk through materials, layout,
            and timing with you—no obligation, just a clear next step.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
            Family-owned stone fabrication · Since 2000
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </motion.section>
  );
}
