// src/app/about/page.tsx
import { BookingButton } from "@/components/site/booking-button";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Quiroz Marble and Granite",
  description:
    "Quiroz Marble and Granite is a family-run stone fabrication shop in the greater Los Angeles area, focused on precise fabrication, clean installation, and a calm client experience from estimate to final walkthrough.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      {/* 1. Intro */}
      <section className="space-y-4 md:space-y-5 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          About
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Quiroz Marble and Granite
        </h1>
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          A family-run stone shop in the greater Los Angeles area, focused on
          precise fabrication, clean installation, and a calm experience from
          first estimate to final walkthrough.
        </p>
      </section>

      {/* 2. Image block */}
      <section className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#E2E0DA] bg-[#E5DED7] shadow-[0_18px_35px_rgba(15,23,42,0.10)]">
          <div className="relative aspect-[5/7] w-full">
            <Image
              src="/about-shop.jpg"
              alt="Stone fabrication in progress at Quiroz Marble and Granite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 flex justify-between items-end text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#F9F7F2]">
            <span className="inline-flex rounded-full bg-black/55 px-3 py-1 backdrop-blur-[3px]">
              In‑house fabrication
            </span>
            <span className="hidden sm:inline-flex rounded-full bg-black/40 px-3 py-1 backdrop-blur-[3px]">
              Los Angeles, California
            </span>
          </div>
        </div>
      </section>

      {/* 3. Story */}
      <section className="mt-10 space-y-4 text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
        <p>
          Most of our projects begin with spaces people live in every day—
          kitchens, baths, fireplaces, and outdoor rooms that need to feel
          settled, not showy. Our work is to make the stone feel like it has
          always belonged there.
        </p>
        <p>
          That means paying attention to how veining moves across an island, how
          seams land in a room, and how every edge feels in the hand. It also
          means respecting the home or jobsite around the stone: protecting
          finishes, coordinating with other trades, and leaving the space in
          good order when we’re done.
        </p>
      </section>

      {/* 4. Three principles */}
      <section className="mt-12 space-y-6">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          How we think about the work
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#111827]">Craft</p>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
              Edges, seams, layouts, and finishes are treated as design
              decisions, not afterthoughts.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#111827]">Clarity</p>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
              Timelines, site needs, and next steps are laid out plainly so
              clients and trade partners know what to expect.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#111827]">Care</p>
            <p className="text-[13px] leading-relaxed text-[#4B5563]">
              Homes and job sites are treated with respect—from protection and
              dust management to the final wipe‑down.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section
        className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-16 md:flex md:items-center md:justify-between md:px-6
                   transition-all duration-200 ease-out
                   hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Talk through a project
          </p>
          <p className="text-sm text-[#111827]">
            Share your plans, drawings, or a simple description of the space,
            and we’ll walk you through what working together can look like.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </section>
    </div>
  );
}
